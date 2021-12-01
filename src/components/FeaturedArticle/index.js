import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage  } from "gatsby-plugin-image"

import * as styles from "./styles.module.scss"

export default function FeaturedArticle({ data }) {
  const image = getImage(data.img)
  console.log(":::", data)
  return (
    <div className={`w-full relative flex z-0 ${styles.featured}`}>
      <GatsbyImage
        image={image}
        alt={data.slug}
        className="h-full w-full absolute inset-0 z-0"
      />
      <div className="relative self-end p-4 z-10">
        <h3 className="font-bold">{data.title}</h3>
      </div>
    </div>
  )
}
