import ImageCard from './ImageCard';

const ImageList = ({ images }) => {
  const renderImageCards = () => {
    return images.map((image, index) => {
      return <ImageCard image={image} key={index} />;
    });
  };

  return <div className='image-list'>{renderImageCards()}</div>;
};

export default ImageList;
