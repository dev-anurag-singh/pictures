import { connect } from 'react-redux';
import ImageGallery from '../ImageGallery';
import { clearImages, fetchImages } from '../../actions';
import { Component } from 'react';

class Search extends Component {
  componentDidMount() {
    this.props.clearImages();

    //CALLING FETCH IMAGE ACTION CREATOR & POPULATING REDUX STORE WITH NEW IMAGES
    this.props.fetchImages(this.props.match.params.term);
  }
  render() {
    return (
      <div className='search-page'>
        <ImageGallery
          term={this.props.match.params.term}
          allImages={this.props.allImages}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { allImages: state.images.images };
};

export default connect(mapStateToProps, { clearImages, fetchImages })(Search);
