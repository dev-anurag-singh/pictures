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

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.props.clearImages();

      //CALLING FETCH IMAGE ACTION CREATOR & POPULATING REDUX STORE WITH NEW IMAGES
      this.props.fetchImages(this.props.match.params.term);
    }
  }

  renderImageGallery() {
    if (!this.props.allImages.length) {
      return <div className='loader'></div>;
    }
    return (
      <ImageGallery
        term={this.props.match.params.term}
        allImages={this.props.allImages}
      />
    );
  }

  render() {
    return <div className='search-page'>{this.renderImageGallery()}</div>;
  }
}

const mapStateToProps = state => {
  return { allImages: state.images.images };
};

export default connect(mapStateToProps, { clearImages, fetchImages })(Search);
