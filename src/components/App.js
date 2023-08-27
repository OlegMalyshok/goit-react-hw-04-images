import { useEffect, useState } from 'react';
import PixaBay from '../API/PixaBay';
import Searchbar from './Searchbar/Searchbar';
import ModalWindow from './ModalWindow/ModalWindow';
import ImageGallery from './ImageGallery/ImageGallery';
import LoaderSpinner from './Loader/Loader';
import Button from './Button/Button';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppStyle, ErrorStyle } from './App.styled';

const App = () => {
  const [searchInput, searchInputSetState] = useState('');
  const [images, imagesSetState] = useState([]);
  const [page, pageSetState] = useState(1);
  const [isLoading, isLoadingSetState] = useState(false);
  const [error, errorSetState] = useState(null);
  const [largeimg, largeimgSetState] = useState('');

  useEffect(() => {
    const fetchImages = async () => {
      if (!searchInput) {
        imagesSetState([]);
        return;
      }

      isLoadingSetState(true);

      try {
        const { hits } = await PixaBay.fetchImages(searchInput, page);
        if (hits.length === 0) {
          return errorSetState(`Could not find images for "${searchInput}"`);
        } else {
          imagesSetState(prevImages => [...prevImages, ...hits]);
        }
      } catch (error) {
        errorSetState();
      } finally {
        isLoadingSetState(false);
      }
    };
    fetchImages();
  }, [searchInput, page]);

  const onSearch = searchInput => {
    searchInputSetState(searchInput);
    pageSetState(1);
    errorSetState(null);
  };

  const modalWindowOpen = largeimg => {
    largeimgSetState(largeimg);
  };

  const onLoadMore = () => {
    pageSetState(prevState => prevState + 1);
  };

  const modalWindowClose = () => {
    largeimgSetState('');
  };

  return (
    <AppStyle>
      <Searchbar onSubmit={onSearch} />
      {isLoading && <LoaderSpinner />}
      {images.length > 0 && !error && (
        <ImageGallery onClickImage={modalWindowOpen} images={images} />
      )}
      {images.length >= 12 * page && <Button loadImages={onLoadMore} />}
      {largeimg && <ModalWindow onClose={modalWindowClose} src={largeimg} />}
      {error && <ErrorStyle>{error}</ErrorStyle>}
      <ToastContainer autoClose={2000} />
    </AppStyle>
  );
};

export default App;
