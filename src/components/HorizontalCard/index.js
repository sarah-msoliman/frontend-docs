import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";

import * as styles from "./styles.module.scss";

export default function HorizontalCard({ data }) {
  const renderImage = () => {
    if (data.img != null) {
      return (
        <GatsbyImage image={getImage(data.img)} alt={data.slug} className={styles.card__img} />
      );
    } else {
      return (
        <StaticImage src="../../../static/images/default.jfif" className={styles.card__img} />
      );
    }
  };
  return (
    <Link to={"/articles/" + data.slug}>
      <article className="flex mb-8 bg-white w-full md:w-6/12 rounded-xl p-4">
        {renderImage()}
        <div className="flex flex-col p-2 justify-center">
          <span className="tag mb-2">{data.tag}</span>
          <h3 className="font-bold text-xl mb-2">{data.title}</h3>
          <p className="text-sm text-secondary-800">{data.date}</p>
        </div>
      </article>
    </Link>
  );
}
