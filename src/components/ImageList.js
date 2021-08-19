import ImageCard from './ImageCard';

const ImageList = ({ images }) => {
  const renderImage = images.map(img => {
    return <ImageCard key={img.id} img={img} />;
  });

  return <div className='image-list'>{renderImage}</div>;
};

export default ImageList;
