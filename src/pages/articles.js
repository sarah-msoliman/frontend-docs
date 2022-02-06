import React from "react";
import { graphql } from "gatsby";

import HomeLayout from "../layouts/HomeLayout";
import VerticalListing from "../components/VerticalListing";

export default function Articles({ data }) {
  return (
    <HomeLayout>
      <VerticalListing data={data.allArticles.nodes} />
    </HomeLayout>
  );
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
`;
