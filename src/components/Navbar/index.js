import React from "react"
import { Link } from "gatsby"

import * as styles from "../../styles/navbar.module.scss"

export default function Navbar() {
  return (
    <nav className={`${styles.navbar} p-4 lg:p-8`}>
      <Link to="/">
        <h1 className={`${styles.navbar__logo} text-2xl font-bold`}>
          <img src="logo.jpg" />
          Ninjas
        </h1>
      </Link>
    </nav>
  )
}
