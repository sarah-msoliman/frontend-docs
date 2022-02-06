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
          className="h-full w-full absolute inset-0 z-0 rounded"
        />
      );
    } else {
      return (
        <StaticImage
          src="../../../static/images/default.jfif"
          className="h-full w-full absolute inset-0 z-0"
        />
      );
    }
  };
  return (
    <Link to={"/articles/" + data.slug} className="w-full">
      <div className={`w-full relative z-0 ${styles.featured}`}>
        {renderImage()}
        <div className="absolute bottom-0 p-4 z-10">
          <div
            className={`text-sm mb-4 flex items-center ${styles.featured__wrapper}`}
          >
            <span className="mr-2 rounded-sm">{data.tag}</span>
            <p>{data.date}</p>
          </div>
          <h2 className="font-bold text-lg">{data.title}</h2>
        </div>
      </div>
    </Link>
  );
}
