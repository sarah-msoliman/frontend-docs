import React from "react";

import Navbar from "../../components/Navbar";

export default function GeneralLayout({ children }) {
  return (
    <div className="container">
      <Navbar />
      <div className="p-8 md:px-0 md:py-16 wide-container">
        {children}
      </div>
    </div>
  );
}
