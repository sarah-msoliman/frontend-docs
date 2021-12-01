import React from "react"

import * as styles from "./styles.module.scss"

export default function FeaturedArticle({ data }) {
  console.log(":::", data)
  return (
    <div className={`w-full relative flex z-0 ${styles.featured}`}>
      <img src={data.img} className="h-full w-full absolute inset-0 z-0" />
      <div className="relative self-end p-4 z-10">
        <h3 className="font-bold">{data.title}</h3>
      </div>
    </div>
  )
}
