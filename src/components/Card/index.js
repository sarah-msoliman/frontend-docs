import React from "react"
import {
  ClipboardListIcon,
  BookOpenIcon,
  CogIcon,
} from "@heroicons/react/outline"

import * as styles from "../../styles/card.module.scss"

export default function Card({ id, data }) {
  const iconClassName = "h-5 w-5"
  return (
    <div className={`${styles.card} p-5`}>
      <h3 className="flex items-center font-bold">
        <span className="p-4 mr-2">
          {data.icon === "ClipboardListIcon" ? (
            <ClipboardListIcon className={iconClassName} />
          ) : data.icon === "CogIcon" ? (
            <CogIcon className={iconClassName} />
          ) : (
            <BookOpenIcon className={iconClassName} />
          )}
        </span>
        {data.title}
      </h3>
    </div>
  )
}
