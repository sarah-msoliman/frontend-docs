import React from "react"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"

import * as styles from "./styles.module.scss"

export default function FeaturedArticle({ data }) {
  const image = getImage(data.img)
  return (
    <div className={`w-full relative flex z-0 ${styles.featured}`}>
      {data.img != null ? (
        <GatsbyImage
          image={image}
          alt={data.slug}
          className="h-full w-full absolute inset-0 z-0"
        />
      ) : <StaticImage src="../../images/default.jfif" className="h-full w-full absolute inset-0 z-0" />
      }
      <div className="relative self-end p-4 z-10">
        <h3 className="font-bold">{data.title}</h3>
      </div>
    </div>
  )
}
