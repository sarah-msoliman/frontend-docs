import React from "react"

import Navbar from "../../components/Navbar"

import * as styles from "../../styles/generalLayout.module.scss"

export default function Layout({ children }) {
  return (
    <div className={`${styles.layout} container mx-auto`}>
      <Navbar />
      <div className="general-layout__content pb-4 lg:pb-8 px-4 lg:px-8">{children}</div>
    </div>
  )
}
