import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";

export default function VerticalCard({ data }) {
  const imageClasses = "rounded-xl min-h-h8 w-2/6 m-2";
  const image = getImage(data.img);
  const renderImage = () => {
    if (data.img != null) {
      return (
        <GatsbyImage image={image} alt={data.slug} className={imageClasses} />
      );
    } else {
      return (
        <StaticImage
          src="../../../static/images/default.jfif"
          className={imageClasses}
        />
      );
    }
  };
  return (
    // <div className="mb-4 md:w-w47 md:mr-4 lg:w-w31">
    //   <Link to={"/articles/" + data.slug} className="w-full">
    //     <div className="w-full bg-primary-100 pt-imglg relative">
    //       {renderImage()}
    //     </div>
    //   </Link>

    //   <Link to={"/articles/" + data.slug} className="w-full">
    //     <div className="py-4">
    //       <div
    //         className="text-sm mb-4 flex items-center"
    //       >
    //         <span className="mr-2 tag">{data.tag}</span>
    //         <p className="text-secondary-300">{data.date}</p>
    //       </div>
    //       <h3 className="font-bold">{data.title}</h3>
    //     </div>
    //   </Link>
    // </div>

    <Link
      to={"/articles/" + data.slug}
      className="w-full md:w-w31 md:mr-4 mb-4 h-full"
    >
      <article className="w-full bg-white rounded-xl flex h-40 border-l-4 border-primary-50">
        {renderImage()}
        <div className="flex flex-col py-4">
          <span className="tag mb-2">{data.tag}</span>
          <h3 className="font-bold text-xl mb-2">{data.title}</h3>
          <p className="text-sm text-secondary-800">{data.date}</p>
        </div>
      </article>
    </Link>
  );
}
