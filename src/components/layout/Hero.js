import SearchBar from '../SearchBar';
import { connect } from 'react-redux';
import { fetchHeroImage } from '../../actions';
import { Component } from 'react';

class Hero extends Component {
  componentDidMount() {
    this.props.fetchHeroImage();
  }

  render() {
    const heroStyle = {
      backgroundImage: `linear-gradient(
        to right bottom,
        rgb(0,0,0,.7),
       rgb(0,0,0,.6)
      ),url(${this.props.heroImage})`,
    };

    return (
      <section style={heroStyle} className='hero'>
        <div className='hero__text-box'>
          <h1 className='heading-primary'>Splashy</h1>
          <p className='paragraph'>
            <span>Find free high-resolution awesome images.</span>
            <span>Powered by creators everywhere.</span>
          </p>
        </div>
        <div className='hero__search-box'>
          <SearchBar />
        </div>
      </section>
    );
  }
}
const mapStateToProps = state => {
  if (state.images.heroImage) {
    return { heroImage: state.images.heroImage.urls.full };
  }
  return { heroImage: '' };
};

export default connect(mapStateToProps, { fetchHeroImage })(Hero);
