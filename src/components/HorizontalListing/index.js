import React from "react";

import Card from "../VerticalCard";
import FeaturedCard from "../FeaturedCard";

import * as styles from "./styles.module.scss";

export default function HorizontalListing({ featured, articles }) {
  return (
    <>
      <section className={`flex flex-wrap ${styles.articleListing__featured}`}>
        {featured.map((item, index) => (
          <FeaturedCard key={index} data={item.frontmatter} />
        ))}
      </section> 

      <h2
        className="text-2xl font-bold my-4 text-primary-50"
      >
        {" "}
        All Articles{" "}
      </h2>

      <section className="flex flex-wrap">
        {articles.map((item, index) => (
          <Card key={index} data={item.frontmatter} />
        ))}
      </section>
    </>
  );
}
