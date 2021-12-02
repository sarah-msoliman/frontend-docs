import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import "@fontsource/nunito"

import GeneralLayout from "../layouts/GeneralLayout"
import ArticlesListing from "../components/ArticlesListing"

import "../styles/global.scss"

export default function Home({ data }) {
  const { title } = data.metaData.siteMetadata
  const featuredArticles = data.featured.nodes
  const articles = data.articles.nodes
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <GeneralLayout>
        <ArticlesListing featured={featuredArticles} articles={articles} />
      </GeneralLayout>
    </>
  )
}

export const query = graphql`
  query CardsListing {
    metaData: site {
      siteMetadata {
        title
      }
    }
    featured: allMarkdownRemark(
      filter: { frontmatter: { featured: { eq: true } } }
      limit: 2
    ) {
      nodes {
        frontmatter {
          title
          description
          img {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
          date
          slug
          tag
        }
      }
    }
    articles: allMarkdownRemark(
      filter: { frontmatter: { featured: { eq: false } } }
    ) {
      nodes {
        frontmatter {
          title
          description
          img {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
          date
          slug
          tag
        }
      }
    }
  }
`
