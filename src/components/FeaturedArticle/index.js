import React from "react"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"

import * as styles from "./styles.module.scss"

export default function FeaturedArticle({ data }) {
  const image = getImage(data.img)
  return (
    <div className={`w-full relative z-0 ${styles.featured}`}>
      {data.img != null ? (
        <GatsbyImage
          image={image}
          alt={data.slug}
          className="h-full w-full absolute inset-0 z-0 rounded"
        />
      ) : (
        <StaticImage
          src="../../images/default.jfif"
          className="h-full w-full absolute inset-0 z-0"
        />
      )}
      <div className="absolute bottom-0 p-4 z-10">
        <div className={`text-sm mb-4 ${styles.featured__wrapper}`}>
          <span className="mr-2 rounded-sm">{data.tag}</span>
          <p>{data.date}</p>
        </div>
        <h2 className="font-bold text-lg">{data.title}</h2>
      </div>
    </div>
  )
}
