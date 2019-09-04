import React, { useState } from "react"
import { graphql } from "gatsby"
import BookBar from "../components/header"
import BookCard from "../components/bookCard"
// import Toggle from "../components/Toggle"

export default ({ data }) => {
  const [erKaninete, setKanin] = useState(false)
  return (
    <div>
      <BookBar />
      {erKaninete && <h2>Kaninete bøker</h2>}
      <div>
        {data.allBookShelfSpreadsheetCsv.nodes
          .filter(book => {
            if (erKaninete) {
              return book.Enhj_rninger_eller_kaniner == "kaniner"
            } else {
              return true
            }
          })

          .map(book => (
            <BookCard
              key={book.id}
              book={book}
              erKaninete={erKaninete}
              setKanin={setKanin}
            />
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
      nodes {
        Norsk_navn
        Engelsk_navn
        Enhj_rninger_eller_kaniner
        Type_bok
        ForsideBilde
        Lenke_til_boka
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
