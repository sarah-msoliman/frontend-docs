import React from "react"
import { Link } from "gatsby"

import Card from "../ArticleCard"
import FeaturedArticle from "../FeaturedArticle"

import * as styles from "./styles.module.scss"

export default function CardsListing({ featured, articles }) {
  return (
    <>
      <section className={`flex flex-wrap ${styles.articleListing}`}>
        {featured.map((item, index) => (
          <Link key={index} to={"/articles/" + item.frontmatter.slug} className="w-full">
            <FeaturedArticle data={item.frontmatter} />
          </Link>
        ))}
      </section>
    </>
  )
}
