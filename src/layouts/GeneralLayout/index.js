import React from "react"

import Navbar from "../../components/Navbar"

import * as styles from "../../styles/generalLayout.module.scss"

export default function GeneralLayout({ children }) {
  return (
    <div className="container">
      <Navbar />
      <div className={`p-4 md:pl-0 pr-0 ${styles.generalLayout__content}`}>{children}</div>
    </div>
  )
}
