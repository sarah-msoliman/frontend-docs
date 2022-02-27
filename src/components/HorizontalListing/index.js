import React from "react";

import Card from "../VerticalCard";
import FeaturedCard from "../FeaturedCard";

import * as styles from "./styles.module.scss";

export default function HorizontalListing({ featured, articles }) {
  return (
    <>
      <h2 className="section-title">Featured Articles</h2>
      <section className={`flex flex-wrap mb-10 ${styles.articleListing__featured}`}>
        {featured.map((item, index) => (
          <FeaturedCard key={index} data={item.frontmatter} />
        ))}
      </section>

      <h2 className="section-title">All Articles</h2>

      <section className="flex flex-wrap">
        {articles.map((item, index) => (
          <Card key={index} data={item.frontmatter} />
        ))}
      </section>
    </>
  );
}
