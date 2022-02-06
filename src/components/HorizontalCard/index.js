import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";

import * as styles from "./styles.module.scss";

export default function HorizontalCard({ data }) {
  const renderImage = () => {
    if (data.img != null) {
      return (
        <GatsbyImage
          image={getImage(data.img)}
          alt={data.slug}
          className="rounded absolute inset-0"
        />
      );
    } else {
      return (
        <StaticImage
          src="../../../static/images/default.jfif"
          className="rounded absolute inset-0"
        />
      );
    }
  };
  return (
    <Link to={"/articles/" + data.slug} className="w-full">
      <div className="w-full flex mb-8">
        <div className={`w-1/6 mr-4 relative ${styles.card__img}`}>
          {renderImage()}
        </div>
        <div className="mt-1">
          <span className={`rounded-sm ${styles.card__tag}`}>{data.tag}</span>
          <p className={`mt-4 ${styles.card__date}`}>{data.date}</p>
          <h3 className="font-bold">{data.title}</h3>
        </div>
      </div>
    </Link>
  );
}
