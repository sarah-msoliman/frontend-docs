import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";

import * as styles from "./styles.module.scss";

export default function VerticalCard({ data }) {
  const image = getImage(data.img);
  const renderImage = () => {
    if (data.img != null) {
      return (
        <GatsbyImage image={image} alt={data.slug} className={styles.card__img} />
      );
    } else {
      return (
        <StaticImage
          src="../../../static/images/default.jfif"
          className={styles.card__img}
        />
      );
    }
  };
  return (
    <Link
      to={"/articles/" + data.slug}
      className="w-full md:w-w31 md:mr-4 mb-4 h-full"
    >
      <article className="w-full bg-white rounded-xl flex h-44 border-l-4 border-primary-50">
        {renderImage()}
        <div className="flex flex-col py-4 px-4 md:px-0">
          <span className="tag mb-2">{data.tag}</span>
          <h3 className="font-bold text-xl mb-2">{data.title}</h3>
          <h4 className="font-bold text-base mb-2">By: {data.author}</h4>
          <p className="text-sm text-secondary-800">{data.date}</p>
        </div>
      </article>
    </Link>
  );
}
