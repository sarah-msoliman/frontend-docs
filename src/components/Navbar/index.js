import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

export default function Navbar() {
  return (
    <header className="relative bg-white">
      <nav className="flex items-center wide-container h-24 md:h-28 justify-between p-4 md:p-8">
        <div>
          <Link to="/" className="flex">
            <StaticImage
              src="../../../static/images/logo.jpg"
              className="w-6 mr-2"
            />
            <p className="text-2xl">
              Ninjas<strong className="uppercase">Hub</strong>
            </p>
          </Link>
        </div>

        <div>
          <Link to="/articles" className="relative">
            <p className="text-base font-semibold text-secondary-400">
              Articles
            </p>
          </Link>
          {/* <Link to="/sessions" activeClassName={styles.header_active}>
          <p className="text-base font-semibold p-4">Sessions</p>
        </Link> */}
        </div>
      </nav>
    </header>
  );
}
