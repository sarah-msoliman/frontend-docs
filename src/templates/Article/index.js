import React from "react"
import { graphql } from "gatsby"

import ArticleLayout from "../../layouts/ArticleLayout"

import * as styles from "./styles.module.scss"

export default function ArticleDetails({ data }) {
  const { html } = data.markdownRemark
  const { title, tag, date } = data.markdownRemark.frontmatter

  return (
    <ArticleLayout>
      <article className={styles.article}>
        <div className="flex items-center">
          <h1 className={`${styles.article__title}`}>{title}</h1>
          <span className={`ml-4 text-sm rounded-sm ${styles.article__tag}`}>
            {tag}
          </span>
        </div>
        <p className={`text-sm mt-2 ${styles.article__date}`}>{date}</p>
        <div className="mt-4" dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </ArticleLayout>
  )
}

export const query = graphql`
  query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        tag
        date
      }
    }
  }
`
