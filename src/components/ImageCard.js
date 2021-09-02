import { useEffect, useRef, useState } from 'react';

const ImageCard = ({ image }) => {
  const [imageHeight, setImageHeight] = useState(null);
  const imageRef = useRef();

  useEffect(() => {
    imageRef.current.addEventListener('load', setHeight);
  });

  const setHeight = () => {
    setImageHeight(imageRef.current ? imageRef.current.clientHeight : null);
  };
  return (
    <div className='image-card'>
      <img
        ref={imageRef}
        alt={image.alt_description}
        src={image.urls.regular}
        className={imageHeight ? null : 'image__skeleton'}
      />
    </div>
  );
};

export default ImageCard;
