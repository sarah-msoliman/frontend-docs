import React from "react";
import { graphql } from "gatsby";

import HomeLayout from "../layouts/HomeLayout";
import VerticalListing from "../components/VerticalListing";

export default function Articles({ data }) {
  return (
    <HomeLayout>
      <VerticalListing data={data.allArticles.nodes} title="All Articles"/>
    </HomeLayout>
  );
}

export const query = graphql`
  query AllArticles {
    allArticles: allMarkdownRemark {
      nodes {
        frontmatter {
          date
          author
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
`;
