import React from "react";
import { graphql } from "gatsby";

import HomeLayout from "../layouts/HomeLayout";
import VerticalListing from "../components/VerticalListing";

export default function Sessions({ data }) {
  return (
    <HomeLayout>
      <VerticalListing data={data.allSessions.nodes} title="All Sessions"/>
    </HomeLayout>
  );
}

export const query = graphql`
  query AllSessions {
    allSessions: allMarkdownRemark(filter: {frontmatter: {type: {eq: "session"}}}) {
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
