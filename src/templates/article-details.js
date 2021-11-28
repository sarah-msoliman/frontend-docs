import React from "react"
import { graphql } from "gatsby"

import GeneralLayout from "../layouts/GeneralLayout"

import * as styles from "../styles/article.module.scss"

export default function ProjectDetails({ data }) {
  const { html } = data.markdownRemark
  const { title, description, tag, slug } =
    data.markdownRemark.frontmatter

  return (
    <GeneralLayout>
      <article className={styles.article}>
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <h3 className={`${styles.article__description} text-l`}>{description}</h3>
        <div className='mt-4' dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </GeneralLayout>
  )
}

export const query = graphql`
  query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
        tag
        slug
      }
    }
  }
`
