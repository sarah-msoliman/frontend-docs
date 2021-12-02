import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"

import * as styles from "./styles.module.scss"

export default function Card({ data }) {
  const image = getImage(data.img)
  return (
    <div className={`${styles.card}`}>
      <Link>
        <div className={`${styles.card__imgWrapper} w-full`}>
          {data.img != null ? (
            <GatsbyImage
              image={image}
              alt={data.slug}
              className="absolute inset-0 w-full"
            />
          ) : (
            <StaticImage src="../../images/default.jfif" className="absolute inset-0 w-full" />
          )}
        </div>
      </Link>

      <div className="py-4">
        <h3>{data.title}</h3>
      </div>
    </div>
  )
}
