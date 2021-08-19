import { Component } from 'react';

class SearchBar extends Component {
  state = { searchTerm: '' };

  onInputChange = e => {
    this.setState({ searchTerm: e.target.value });
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.state.searchTerm);
  };

  render() {
    return (
      <div className='ui segment'>
        <form onSubmit={this.onFormSubmit} className='ui form'>
          <div className='field'>
            <label>Search Images</label>
            <input
              value={this.state.searchTerm}
              onChange={this.onInputChange}
              type='text'
              placeholder='Search for Images'
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
