import React from "react";

import Card from "../VerticalCard";
import FeaturedCard from "../FeaturedCard";

import * as styles from "./styles.module.scss";

export default function HorizontalListing({ featured, articles }) {
  return (
    <>
      <h2 className="section-title">Featured Articles</h2>
      <section
        className={`flex flex-wrap mb-10 ${styles.articleListing__featured}`}
      >
        {featured.map((item, index) => (
          <FeaturedCard key={index} data={item.frontmatter} />
        ))}
      </section>

      <div className="flex justify-between items-center pr-4 md:pr-8">
        <h2 className="section-title">All Articles</h2>
        <a href="/articles" className="underline text-primary-50">See All</a>
      </div>

      <section className="flex flex-wrap mb-10">
        {articles.map((item, index) => (
          <Card key={index} data={item.frontmatter} />
        ))}
      </section>
    </>
  );
}
