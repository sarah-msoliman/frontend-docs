import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";

export default function VerticalCard({ data }) {
  const image = getImage(data.img);
  const renderImage = () => {
    if (data.img != null) {
      return (
        <GatsbyImage
          image={image}
          alt={data.slug}
          className="inset-0 w-full rounded img-position"
        />
      );
    } else {
      return (
        <StaticImage
          src="../../../static/images/default.jfif"
          className="inset-0 w-full rounded img-position"
        />
      );
    }
  };
  return (
    <div className="mb-4 md:w-w47 md:mr-4 lg:w-w31">
      <Link to={"/articles/" + data.slug} className="w-full">
        <div className="w-full bg-primary-100 pt-imglg relative">
          {renderImage()}
        </div>
      </Link>

      <Link to={"/articles/" + data.slug} className="w-full">
        <div className="py-4">
          <div
            className="text-sm mb-4 flex items-center"
          >
            <span className="mr-2 tag">{data.tag}</span>
            <p className="text-secondary-300">{data.date}</p>
          </div>
          <h3 className="font-bold">{data.title}</h3>
        </div>
      </Link>
    </div>
  );
}
