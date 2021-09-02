import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clearImages, fetchImages } from '../../actions';

import ImageGallery from '../ImageGallery';
import Hero from '../layout/Hero';

class Home extends Component {
  componentDidMount() {
    this.props.clearImages();
    //CALLING FETCH IMAGE ACTION CREATOR & POPULATING REDUX STORE WITH NEW IMAGES
    this.props.fetchImages(null);
  }

  renderImageGallery() {
    if (!this.props.allImages.length) {
      return <div className='loader'></div>;
    }
    return <ImageGallery allImages={this.props.allImages} />;
  }

  render() {
    return (
      <div className='home'>
        <Hero />
        {this.renderImageGallery()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { allImages: state.images.images };
};

export default connect(mapStateToProps, { clearImages, fetchImages })(Home);
