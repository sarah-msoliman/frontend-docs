import React from "react";

import GeneralLayout from "../layouts/GeneralLayout"

import "../styles/global.scss";
import * as styles from "../styles/home.module.scss";

export default function Home() {
  return (
    <GeneralLayout>
      <section className={`${styles.home} flex items-center`}>
        <div className={`container mx-auto pl-8 pr-8 relative ${styles.home__content}`}>
          <h1 className="text-6xl font-bold pb-4">Docs</h1>
          <h3 className="text-xl md:w-9/12 lg:w-5/12">elmenus Frontend Chapter documentation. Everything you need to know about our Repos, Guidlines, Docs & Sessions...</h3>
        </div>
      </section>
    </GeneralLayout>
  );
}
