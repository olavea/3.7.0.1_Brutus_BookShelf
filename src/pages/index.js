import React, { useState } from "react"
import { graphql } from "gatsby"
import BookBar from "../components/header"
import BookCard from "../components/bookCard"
// import Toggle from "../components/Toggle"

export default ({ data }) => {
  const [isUnicorny, setUnicorn] = useState(false)
  return (
    <div>
      <BookBar />
      {isUnicorny && <h2>Unicorny Books</h2>}
      <div>
        {data.allBookShelfSpreadsheetCsv.nodes
          .filter(book => {
            if (isUnicorny === "kaniner") {
              return book.Enhj_rninger_eller_kaniner == "kaniner"
            } else if (isUnicorny === "Enhjørning") {
              return book.Enhj_rninger_eller_kaniner == "Enhjørning"
            } else if (isUnicorny === "katt") {
              return book.Enhj_rninger_eller_kaniner == "katt"
            } else if (isUnicorny === "hund") {
              return book.Enhj_rninger_eller_kaniner == "hund"
            } else if (isUnicorny === "elefant") {
              return book.Enhj_rninger_eller_kaniner == "elefant"
            } else if (isUnicorny === "trenger passord") {
              return book.passord == "trenger passord"
            } else if (isUnicorny === "trenger ikke passord") {
              return book.passord == "trenger ikke passord"
            } else if (isUnicorny === "bare lydbok") {
              return book.Type_bok == "bare lydbok"
            } else if (isUnicorny === "bare bildebok") {
              return book.Type_bok == "bare bildebok"
            } else if (isUnicorny === "bildebok og lydbok") {
              return book.Type_bok == "bildebok og lydbok"
            } else {
              return true
            }
          })

          .map(book => (
            <BookCard
              key={book.id}
              book={book}
              erKaninete={isUnicorny}
              setKanin={setUnicorn}
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
        Kj_p_boka
        Pris
        passord
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
