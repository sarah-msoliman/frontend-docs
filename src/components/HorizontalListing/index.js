import React from "react";

import Card from "../VerticalCard";
import FeaturedCard from "../FeaturedCard";

import * as styles from "./styles.module.scss";

export default function HorizontalListing({ data }) {
  const renderFeaturedList = listData => {
    return (
      <>
        <h2 className="section-title">{listData.sectionTitle}</h2>
        <section
          className={`flex flex-wrap mb-10 ${styles.articleListing__featured}`}
        >
          {listData.data.map((item, index) => (
            <FeaturedCard key={index} data={item.frontmatter} />
          ))}
        </section>
      </>
    );
  };

  const renderList = listData => {
    return (
      <>
        <div className="flex justify-between items-center pr-4 md:pr-8">
          <h2 className="section-title">{listData.sectionTitle}</h2>
          <a href={listData.slug} className="underline text-primary-50">
            See All
          </a>
        </div>

        <section className="flex flex-wrap mb-10">
          {listData.data.map((item, index) => (
            <Card key={index} data={item.frontmatter} />
          ))}
        </section>
      </>
    );
  };
  return (
    data &&
    data.map((list, index) =>
      list.featured ? renderFeaturedList(list) : renderList(list)
    )
  );
}
