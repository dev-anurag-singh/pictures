import { Component } from 'react';
import { connect } from 'react-redux';
import { fetchImages } from '../actions';
import ImageList from './ImageList';

class ImageGallery extends Component {
  state = { columns: [0, 1, 2], scrollSearchAt: 3000, page: 1 };

  // This will define how many ImageList component to show
  defineColumns = () => {
    const windowWidth = window.innerWidth;
    const columns = this.state.columns;

    if (windowWidth >= 1000) {
      if (!columns.includes(2)) {
        this.setState({ columns: [0, 1, 2] });
      }
    } else if (1000 > windowWidth && windowWidth >= 768) {
      if (!columns.includes(1) || columns.includes(2)) {
        this.setState({ columns: [0, 1] });
      }
    } else {
      if (columns.includes(1) || columns.includes(2)) {
        this.setState({ columns: [0] });
      }
    }
  };
  componentDidMount() {
    this.defineColumns();
    window.addEventListener('resize', this.defineColumns, {
      capture: true,
    });
    document.addEventListener('scroll', this.setScrollableHeight);
  }

  setScrollableHeight = () => {
    if (window.scrollY > this.state.scrollSearchAt) {
      this.setState({
        scrollSearchAt: this.state.scrollSearchAt + 2000,
        page: this.state.page + 1,
      });
      this.props.fetchImages(
        this.props.term ? this.props.term : null,
        this.state.page
      );
    }
  };

  componentWillUnmount() {
    window.removeEventListener('resize', this.defineColumns);
    document.removeEventListener('scroll', this.setScrollableHeight);
  }

  renderImageList() {
    return this.state.columns.map(index => {
      let images = [];
      const val = this.state.columns.length;
      for (let i = index; i < this.props.allImages.length; i += val) {
        images.push(this.props.allImages[i]);
      }

      return <ImageList key={index} images={images} />;
    });
  }

  render() {
    return (
      <div
        style={{ '--columns': this.state.columns.length }}
        className='gallery'
      >
        {this.renderImageList()}
      </div>
    );
  }
}

export default connect(null, { fetchImages })(ImageGallery);
