import React from "react";

import Navbar from "../../components/Navbar";

export default function ArticleLayout({ children }) {
  return (
    <div className="layout-container">
      <Navbar />
      <div className="w-w31p-8 md:px-0 md:py-16 narrow-container ">
        {children}
      </div>
    </div>
  );
}
