import React from "react"
import { Link } from "gatsby"

import Card from "../ArticleCard"
import FeaturedArticle from "../FeaturedArticle"

import * as styles from "./styles.module.scss"

export default function CardsListing({ featured, articles }) {
  return (
    <>
      <section className={`flex flex-wrap ${styles.articleListing__featured}`}>
        {featured.map((item, index) => (
          <Link
            key={index}
            to={"/articles/" + item.frontmatter.slug}
            className="w-full"
          >
            <FeaturedArticle data={item.frontmatter} />
          </Link>
        ))}
      </section>

      <section className={`flex flex-wrap ${styles.articleListing__articles}`}>
        {articles.map((item, index) => (
          <Card key={index} data={item.frontmatter} />
        ))}
      </section>
    </>
  )
}
