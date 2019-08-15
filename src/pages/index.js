import React from "react"
import { graphql } from "gatsby"
import BookBar from "../components/header"
import BookCard from "../components/bookCard"

export default ({ data }) => {
  return (
    <div>
      <BookBar />
      <div>
        {data.allBookShelfSpreadsheetCsv.edges.map(({ node }) => (
          <div key={node.id}>
            <BookCard book={node} />
          </div>
        ))}
      </div>
    </div>
  )
}
export const query = graphql`
  query MyQuery {
    allBookShelfSpreadsheetCsv(
      sort: { fields: Navn__lest_inn_for, order: DESC }
    ) {
      edges {
        node {
          Norsk_navn
          Engelsk_navn
          Enhj_rninger_eller_kaniner
          Type_bok
          ForsideBilde
          Lenke_til_boka
        }
      }
    }
  }
`

// import SimpleAppBar from "../components/header"
// import PlantCard from "../components/plantCard"
// import Chips from "../components/chip"

// <SimpleAppBar />

// <PlantCard
//               plant={node}
//               tagline="wes is cool"
//               tagline="scott is cool"
//             />
