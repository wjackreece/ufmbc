import { useState, useEffect } from "react";

import PhotoAlbum from "react-photo-album";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import photos from "./photos2";

import css from "./GalleryTest.module.scss";

const GalleryTest = () => {
  const [index, setIndex] = useState(-1);

  const [tag, setTag] = useState("all");
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    tag === "all"
      ? setFilteredImages(photos)
      : setFilteredImages(photos.filter((image) => image.tag === tag));
  }, [tag]);

  const TagButton = ({ name, handleSetTag }) => {
    return (
      <button
        className={css.tag}
        style={{ backgroundColor: tag === name ? "#727577b7" : "#f7f7f7" }}
        onClick={() => handleSetTag(name)}
      >
        {name.toUpperCase()}
      </button>
    );
  };

  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <div className={css.galleryTop}>
          <div className={css.galleryTitle}>Gallery</div>
          <div className={css.tags}>
            <TagButton name="all" handleSetTag={setTag} />
            <TagButton name="Event Flyers" handleSetTag={setTag} />
            <TagButton name="MLK Parade" handleSetTag={setTag} />
            <TagButton name="Valentine's Dinner" handleSetTag={setTag} />
          </div>
        </div>
        <div className={css.gallery}>
          <PhotoAlbum
            photos={filteredImages}
            layout="rows"
            targetRowHeight={200}
            onClick={({ index }) => setIndex(index)}
          />

          <Lightbox
            slides={filteredImages}
            open={index >= 0}
            index={index}
            close={() => setIndex(-1)}
            // enable optional lightbox plugins
            plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
          />
        </div>
      </div>
    </div>
  );
};

export default GalleryTest;
