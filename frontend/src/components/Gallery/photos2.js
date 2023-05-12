import { galleryImages } from "../../utils/data";

const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const photos = galleryImages.map((photo) => ({
  src: photo.src,
  tag: photo.tag,
  width: photo.width,
  height: photo.height,
  srcSet: breakpoints.map((breakpoint) => {
    const height = Math.round((photo.height / photo.width) * breakpoint);
    return {
      src: photo.src,
      width: breakpoint,
      height,
    };
  }),
}));

export default photos;
