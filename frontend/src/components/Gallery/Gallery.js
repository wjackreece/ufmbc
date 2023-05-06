import React from "react";

import css from "./Gallery.module.scss";

const Gallery = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <div className={css.title}>Events</div>
      </div>
    </div>
  );
};

export default Gallery;
