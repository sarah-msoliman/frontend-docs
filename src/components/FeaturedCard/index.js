import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";

import * as styles from "./styles.module.scss";

export default function FeaturedCard({ data }) {
  const image = getImage(data.img);
  const renderImage = () => {
    if (data.img != null) {
      return (
        <GatsbyImage
          image={image}
          alt={data.slug}
          className={styles.featured__img}
        />
      );
    } else {
      return (
        <StaticImage
          src="../../../static/images/default.jfif"
          className={styles.featured__img}
        />
      );
    }
  };
  return (
    <Link to={"/articles/" + data.slug} className="w-full mb-4 md:w-w31 md:mr-4">
      <article className="relative w-full bg-white rounded-2xl flex md:block md:h-h29">
        {renderImage()}
        <div className={`relative flex flex-col p-4 mx-0 my-auto md:absolute md:h-full md:w-full md:z-10 md:p-8 md:justify-end md:bottom-0 md:rounded-2xl ${styles.featured__body}`}>
          <span className="tag mb-2">{data.tag}</span>
          <h2 className="font-bold text-xl mb-2 md:text-white">{data.title}</h2>
          <p className="text-sm text-secondary-800">{data.date}</p>
        </div>
      </article>
    </Link>
  );
}
