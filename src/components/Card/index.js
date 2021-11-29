import React from "react"

import Icon from "../Icon"

import * as styles from "../../styles/card.module.scss"

export default function Card({ data }) {
  return (
    <div className={`${styles.card} p-5`}>
      <h3 className="flex items-center font-bold">
        <span className="p-4 mr-2">
          <Icon icon={data.Icon} />
        </span>
        {data.title}
      </h3>
      <p className="mt-4">{data.description}</p>
    </div>
  )
}
