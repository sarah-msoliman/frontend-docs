import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import "@fontsource/nunito";

import HomeLayout from "../layouts/HomeLayout";
import HorizontalListing from "../components/HorizontalListing";

import "normalize.css";
import "../styles/global.scss";

export default function Home({ data }) {
  const { title, subTitle } = data.metaData.siteMetadata;
  const featuredArticles = data.featured.nodes;
  const articles = data.articles.nodes;
  return (
    <>
      <Helmet>
        <title>{title} {subTitle}</title>
      </Helmet>

      <HomeLayout>
        <HorizontalListing featured={featuredArticles} articles={articles} />
      </HomeLayout>
    </>
  );
}

export const query = graphql`
  query CardsListing {
    metaData: site {
      siteMetadata {
        title,
        subTitle
      }
    }
    featured: allMarkdownRemark(
      filter: { frontmatter: { featured: { eq: true } } }
      limit: 3
    ) {
      nodes {
        frontmatter {
          title
          img {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
          date
          author
          slug
          tag
        }
      }
    }
    articles: allMarkdownRemark(limit: 3) {
      nodes {
        frontmatter {
          title
          img {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
          date
          author
          slug
          tag
        }
      }
    }
  }
`;
