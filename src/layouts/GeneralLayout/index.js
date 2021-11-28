import React from "react"

import Navbar from "../../components/Navbar"

import * as styles from "../../styles/generalLayout.module.scss"

export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Navbar />
      <div className="general-layout__content">{children}</div>
    </div>
  )
}
