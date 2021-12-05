import React from "react"
import { Link } from "gatsby"

import * as styles from "./styles.module.scss"

export default function Navbar() {
  return (
    <header className={`${styles.header}`}>
      <nav className={`${styles.header__nav} flex items-center`}>
        <Link to="/">
          <p className={`${styles.header__logo} text-2xl p-4 md:pl-0`}>
            Ninjas<strong>Hub</strong>
          </p>
        </Link>
        <Link to="/articles" activeClassName={styles.header_active}>
          <p className="text-base font-semibold p-4">Articles</p>
        </Link>
        <Link to="/sessions" activeClassName={styles.header_active}>
          <p className="text-base font-semibold p-4">Sessions</p>
        </Link>
      </nav>
    </header>
  )
}
