import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

import HomeLayout from "../layouts/HomeLayout"
import CardsListing from "../components/CardsListing"

import "../styles/global.scss"
import * as styles from "../styles/home.module.scss"

export default function Home({ data }) {
  const { title } = data.metaData.siteMetadata
  const articles = data.articles.nodes
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <HomeLayout>
        <section className={`${styles.home} flex items-center`}>
          <div
            className={`container mx-auto pl-8 pr-8 relative ${styles.home__content}`}
          >
            <h1 className="text-6xl font-bold pb-4">Docs</h1>
            <h3 className="text-xl md:w-9/12 lg:w-5/12">
              elmenus Frontend Chapter documentation. Everything you need to
              know about our Repos, Guidlines, Docs & Sessions...
            </h3>
          </div>
        </section>

        <section>
          <CardsListing data={articles} />
        </section>
      </HomeLayout>
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
    articles: allMarkdownRemark {
      nodes {
        frontmatter {
          title
          icon
          description
          tag
          slug
        }
      }
    }
  }
`
