import React from "react"
import { Link } from "gatsby"

import Card from "../Card"

export default function CardsListing({ data }) {
  return (
    <Link to={"/articles/" + data.url}>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-4 lg:mx-8">
        {data.map((article, index) => (
          <Card key={index} data={article} />
        ))}
      </div>
    </Link>
  )
}
