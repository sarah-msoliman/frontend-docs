import React from "react"
import { BeakerIcon } from "@heroicons/react/solid"

import * as styles from "../../styles/card.module.scss"

export default function Card({ id, data }) {
  return (
    <div className={`${styles.card} p-5`}>
      <h3 className="flex items-center font-bold">
        <span className="p-4 mr-2">
          <BeakerIcon className="h-4 w-4" />
        </span>
        {data.title}
      </h3>
    </div>
  )
}
