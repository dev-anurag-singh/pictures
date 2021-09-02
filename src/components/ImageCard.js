const ImageCard = ({ image }) => {
  return (
    <div className='image-card'>
      <img alt={image.alt_description} src={image.urls.regular} />
    </div>
  );
};

export default ImageCard;
