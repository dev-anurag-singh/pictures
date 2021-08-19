import { Component } from 'react';
import SearchBar from './SearchBar';
import unsplash from '../api/unsplash';
import ImageList from './ImageList';

class App extends Component {
  state = { images: [] };

  onSearch = async term => {
    const response = await unsplash.get(
      `/search/photos?query=${term}&per_page=25`
    );
    this.setState({ images: response.data.results });
  };

  componentDidMount() {
    this.onSearch('random');
  }

  render() {
    return (
      <div className='ui container' style={{ marginTop: '10px' }}>
        <SearchBar onSearch={this.onSearch} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
