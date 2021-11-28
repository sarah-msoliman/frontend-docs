import React from "react"
import { graphql } from "gatsby"

import GeneralLayout from "../layouts/GeneralLayout"

export default function ProjectDetails({ data }) {
  const { html } = data.markdownRemark
  const { title, icon, description, tag, slug } =
    data.markdownRemark.frontmatter

  return (
    <article>
      <h2>{title}</h2>
    </article>
  )
}

export const query = graphql`
  query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        icon
        description
        tag
        slug
      }
    }
  }
`
