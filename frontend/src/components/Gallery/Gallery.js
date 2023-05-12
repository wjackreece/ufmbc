import React, { useEffect, useState } from "react";

import css from "./Gallery.module.scss";

import { galleryImages } from "../../utils/data";

const TagButton = ({ name, handleSetTag, tagActive }) => {
  return (
    <button className={css.tag} onClick={() => handleSetTag(name)}>
      {name.toUpperCase()}
    </button>
  );
};

const Gallery = () => {
  const [tag, setTag] = useState("all");
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    tag === "all"
      ? setFilteredImages(galleryImages)
      : setFilteredImages(galleryImages.filter((image) => image.tag === tag));
  }, [tag]);

  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <div className={css.galleryTitle}>Gallery</div>
        <div className={css.tags}>
          <TagButton name="all" handleSetTag={setTag} />
          <TagButton name="mlk" handleSetTag={setTag} />
          <TagButton name="mlk2" handleSetTag={setTag} />
          <TagButton name="mlk3" handleSetTag={setTag} />
        </div>
        <div className={css.imagesGrid}>
          {filteredImages.map((image) => (
            <div className={css.imageCard} key={galleryImages.id}>
              <img
                className={css.image}
                src={`/images/${image.imageName}`}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
