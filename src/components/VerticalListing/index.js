import React from "react";
import HorizontalCard from "../HorizontalCard";

export default function VerticalListing({ data, title }) {
  return (
    <div>
      <h3 className="text-3xl font-bold mb-4">{title}</h3>
      {data.map((item, index) => (
        <HorizontalCard key={index} data={item.frontmatter} />
      ))}
    </div>
  );
}
