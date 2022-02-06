import React from "react";

import Navbar from "../../components/Navbar";

import * as styles from "./styles.module.scss";

export default function GeneralLayout({ children }) {
  return (
    <div className="container">
      <Navbar />
      <div className={`p-8 md:px-0 md:py-16 ${styles.layout__content}`}>
        {children}
      </div>
    </div>
  );
}
