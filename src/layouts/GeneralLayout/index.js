import React from "react"

import Navbar from "../../components/Navbar"

import * as styles from "../../styles/generalLayout.module.scss"

export default function Layout({ children }) {
  return (
    <div className={`${styles.layout} container mx-auto`}>
      <Navbar />
      <div className="general-layout__content p-4 lg:p-8">{children}</div>
    </div>
  )
}
