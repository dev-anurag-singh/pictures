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

  render() {
    return (
      <div className='home'>
        <Hero />
        <ImageGallery allImages={this.props.allImages} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { allImages: state.images.images };
};

export default connect(mapStateToProps, { clearImages, fetchImages })(Home);
