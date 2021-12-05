import React from "react"
import { graphql } from "gatsby"

import HomeLayout from "../layouts/HomeLayout"
import Listing from "../components/Listing"

export default function Articles({ data }) {
  return (
    <HomeLayout>
      <Listing data={data.allArticles.nodes} />
    </HomeLayout>
  )
}

export const query = graphql`
  query AllArticles {
    allArticles: allMarkdownRemark {
      nodes {
        frontmatter {
          date
          img {
            childImageSharp {
              gatsbyImageData
            }
          }
          slug
          tag
          title
        }
      }
    }
  }
`
