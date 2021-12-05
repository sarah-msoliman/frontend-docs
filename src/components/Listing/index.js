import React from "react"
import HorizontalCard from "../HorizontalCard"

export default function Listing({ data }) {
  return (
    <div>
      {data.map((item, index) => (
        <HorizontalCard key={index} data={item.frontmatter}/>
      ))}
    </div>
  )
}
