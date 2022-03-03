import React from "react";
import { graphql } from "gatsby";

import ArticleLayout from "../../layouts/ArticleLayout";

import * as styles from "./styles.module.scss";

export default function ArticleDetails({ data }) {
  const { html } = data.markdownRemark;
  const { title, tag, date, author } = data.markdownRemark.frontmatter;

  return (
    <ArticleLayout>
      <article className={styles.article}>
        <div className="flex flex-col md:flex-row md:items-center relative">
          <h1 className={styles.article__title}>{title}</h1>
          <span className="md:ml-4 text-sm tag">{tag}</span>
        </div>
        <h3 className={styles.article__author}>By: {author}</h3>
        <p className={styles.article__date}>{date}</p>
        <div className={`mt-8 ${styles.article__content}`} dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </ArticleLayout>
  );
}

export const query = graphql`
  query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        tag
        date
        author
      }
    }
  }
`;
