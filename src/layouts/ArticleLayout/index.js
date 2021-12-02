import React from "react"

import Navbar from "../../components/Navbar"

import * as styles from "./styles.module.scss"

export default function ArticleLayout({ children }) {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className={`p-8 md:px-0 md:py-16 ${styles.layout__content}`}>
          {children}
        </div>
      </div>
    </div>
  )
}
