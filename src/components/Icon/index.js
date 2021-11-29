import React from "react"
import {
  ClipboardListIcon,
  BookOpenIcon,
  CogIcon,
} from "@heroicons/react/outline"

export default function Icon({ icon }) {
  const iconClassName = "h-5 w-5"
  return (
    icon === "ClipboardListIcon" ? (
        <ClipboardListIcon className={iconClassName} />
      ) : icon === "CogIcon" ? (
        <CogIcon className={iconClassName} />
      ) : (
        <BookOpenIcon className={iconClassName} />
      )
  )
}
