import { LazyLoadImage } from 'react-lazy-load-image-component';
type TLazyImage = {
  alt: string;
  height: number;
  width: number;
  src: string;
};

const Image = ({ height, width, alt, src }: TLazyImage) => (
  <div>
    <LazyLoadImage
      height={height}
      width={width}
      alt={alt}
      src={src} // use normal <img> attributes as props
      className="d-block"
    />
  </div>
);
export default Image;
