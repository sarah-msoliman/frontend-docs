import React from "react";
import { Link } from "gatsby";

import * as styles from "./styles.module.scss";

export default function Navbar() {
  return (
    <header className={`${styles.header} shadow-md`}>
      <nav className="flex items-center wide-container">
        <Link to="/" className="border-r border-secondary-100">
          <p className="text-2xl p-4 md:pl-0 text-primary-50">
            Ninjas<strong className="uppercase">Hub</strong>
          </p>
        </Link>
        <Link to="/articles" activeClassName={`${styles.header_active} relative`}>
          <p className="text-base font-semibold p-4">Articles</p>
        </Link>
        {/* <Link to="/sessions" activeClassName={styles.header_active}>
          <p className="text-base font-semibold p-4">Sessions</p>
        </Link> */}
      </nav>
    </header>
  );
}
