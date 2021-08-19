import React, { Component } from 'react';

export default class ImageCard extends Component {
  constructor(props) {
    super(props);
    this.state = { spans: null, height: null };
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    const spanValue = Math.ceil(this.imageRef.current.clientHeight / 10) + 2;
    const heightValue = (spanValue - 2) * 10;
    this.setState({ spans: spanValue, height: heightValue });
  };

  render() {
    const { alt_description, urls } = this.props.img;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img
          style={{ height: `${this.state.height}px` }}
          ref={this.imageRef}
          alt={alt_description}
          src={urls.regular}
        />
      </div>
    );
  }
}
