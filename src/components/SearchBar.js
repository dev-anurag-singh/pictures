import { Component } from 'react';
import { connect } from 'react-redux';
import history from '../history';
import { fetchImages, clearImages } from './../actions';

class SearchBar extends Component {
  state = { term: '' };

  onUrlChange = () => {
    if (history.location.pathname === `/search/${this.state.term}`) {
      return;
    } else {
      this.setState({
        term: history.location.pathname.substr(
          8,
          history.location.pathname.length
        ),
      });
    }
  };

  componentDidMount() {
    if (!this.state.term && history.location.pathname.includes('/search/')) {
      this.setState({
        term: history.location.pathname.substr(
          8,
          history.location.pathname.length
        ),
      });
    }

    history.listen(this.onUrlChange);
  }

  // RUNS ONLY WHEN FORM IS SUBMITTED
  onFormSubmit = event => {
    event.preventDefault();

    // CLEARING ALL STORED IMAGES TO POPULATE NEW ONE
    this.props.clearImages();

    //CALLING FETCH IMAGE ACTION CREATOR & POPULATING REDUX STORE WITH NEW IMAGES
    this.props.fetchImages(this.state.term);

    // NAVIGATE USER TO SEARCH PAGE
    history.push(`/search/${this.state.term}`);
  };
  // RUNS EVERYTIME WHEN INPUT VALUE IS CHANGED
  onTermChange = event => {
    this.setState({ term: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className='search'>
        <input
          type='text'
          placeholder='Search for Images'
          className='search__input'
          value={this.state.term}
          onChange={this.onTermChange}
        />
        <button className='search__btn'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='currentColor'
            width='16'
            height='16'
            className='icon search__icon'
            viewBox='0 0 16 16'
          >
            <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
          </svg>
        </button>
      </form>
    );
  }
}

export default connect(null, { fetchImages, clearImages })(SearchBar);
