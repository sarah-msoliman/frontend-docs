import React from "react"
import { Link } from "gatsby"

import * as styles from "../../styles/navbar.module.scss"

export default function Navbar() {
  return (
    <header>
      <nav className={`${styles.navbar} p-4`}>
        <Link to="/">
          <p className={`${styles.navbar__logo} text-2xl`}>
            Ninjas<strong>Hub</strong>
          </p>
        </Link>
      </nav>
    </header>
  )
}
