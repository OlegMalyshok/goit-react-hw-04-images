const { Component } = require('react');

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
  };

  changeQuery = newQuery => {
    this.setState({ query: `${Date.now}/${newQuery}`, images: [], page: 1 });
  };

  setImages = () => {};

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      console.log(
        `HTTP запит за ${this.state.query} і page=${this.state.page}`
      );
      // HTTP запит за query
      //   this.setState({ images: результат запиту })
    }
  }

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    return (
      <div>
        <div>
          <form
            onSubmit={evt => {
              evt.preventDefault();
              this.changeQuery(evt.target.elements.query.value);
              evt.target.reset();
            }}
          >
            <input type="text" name="query" />
            <button type="submit">Submit</button>
          </form>
        </div>
        <div>Gallery</div>
        <div>
          <button onClick={this.handleLoadMore}>Load more</button>
        </div>
      </div>
    );
  }
}
