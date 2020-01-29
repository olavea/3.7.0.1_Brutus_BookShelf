import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";
import BookBar from "../components/header";
import BookCard from "../components/bookCard";
import { Button } from "../components/Button";
import { useAuth } from "react-use-auth";

export default ({ data }) => {
  const [isUnicorny, setUnicorn] = useState(false);

  const { isAuthenticated, login, logout } = useAuth();
  if (isAuthenticated()) {
    return (
      <div>
        <BookBar />
        <Button onClick={logout}>Logout</Button>
        {isUnicorny === "kaniner" && <h2>kaninente Bøker 🐰</h2>}
        {isUnicorny === "Enhjørning" && <h2>Unicorny Books 🦄</h2>}
        {isUnicorny === "har passord" && <h2>Har du passord? 🔑</h2>}
        {isUnicorny === "trenger ikke passord" && (
          <h2>Du trenger ikke passord 😺👍</h2>
        )}
        {isUnicorny === "Harald Og Josefine" && <h2>Harald Og Josefine</h2>}
        {isUnicorny === "Liv og Ima" && <h2>Liv og Ima</h2>}
        <div>
          {data.allBookShelfSpreadsheetCsv.nodes
            .filter(book => {
              if (isUnicorny === "kaniner") {
                return book.Enhj_rninger_eller_kaniner == "kaniner";
              } else if (isUnicorny === "Enhjørning") {
                return book.Enhj_rninger_eller_kaniner == "Enhjørning";
              } else if (isUnicorny === "katt") {
                return book.Enhj_rninger_eller_kaniner == "katt";
              } else if (isUnicorny === "hund") {
                return book.Enhj_rninger_eller_kaniner == "hund";
              } else if (isUnicorny === "elefant") {
                return book.Enhj_rninger_eller_kaniner == "elefant";
              } else if (isUnicorny === "har passord") {
                return book.passord == "har passord";
              } else if (isUnicorny === "trenger ikke passord") {
                return book.passord == "trenger ikke passord";
              } else if (isUnicorny === "bare lydbok") {
                return book.Type_bok == "bare lydbok";
              } else if (isUnicorny === "bare bildebok") {
                return book.Type_bok == "bare bildebok";
              } else if (isUnicorny === "bildebok og lydbok") {
                return book.Type_bok == "bildebok og lydbok";
              } else if (isUnicorny === "Harald Og Josefine") {
                return book.Navn__lest_inn_for == "Harald Og Josefine";
              } else if (isUnicorny === "Liv og Ima") {
                return book.Navn__lest_inn_for == "Liv og Ima";
              } else {
                return true;
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
    );
  } else {
    return (
      <div>
        <BookBar />
        <Button onClick={login}>Login</Button>
        {isUnicorny === "kaniner" && <h2>kaninente Bøker 🐰</h2>}
        {isUnicorny === "Enhjørning" && <h2>Unicorny Books 🦄</h2>}
        {isUnicorny === "har passord" && <h2>Har du passord? 🔑</h2>}
        {isUnicorny === "trenger ikke passord" && (
          <h2>Du trenger ikke passord 😺👍</h2>
        )}
        {isUnicorny === "Harald Og Josefine" && <h2>Harald Og Josefine</h2>}
        {isUnicorny === "Liv og Ima" && <h2>Liv og Ima</h2>}
        <div>
          {data.allBookShelfSpreadsheetCsv.nodes
            .filter(book => {
              if (isUnicorny === "kaniner") {
                return book.Enhj_rninger_eller_kaniner == "kaniner";
              } else if (isUnicorny === "Enhjørning") {
                return book.Enhj_rninger_eller_kaniner == "Enhjørning";
              } else if (isUnicorny === "katt") {
                return book.Enhj_rninger_eller_kaniner == "katt";
              } else if (isUnicorny === "hund") {
                return book.Enhj_rninger_eller_kaniner == "hund";
              } else if (isUnicorny === "elefant") {
                return book.Enhj_rninger_eller_kaniner == "elefant";
              } else if (isUnicorny === "har passord") {
                return book.passord == "har passord";
              } else if (isUnicorny === "trenger ikke passord") {
                return book.passord == "trenger ikke passord";
              } else if (isUnicorny === "bare lydbok") {
                return book.Type_bok == "bare lydbok";
              } else if (isUnicorny === "bare bildebok") {
                return book.Type_bok == "bare bildebok";
              } else if (isUnicorny === "bildebok og lydbok") {
                return book.Type_bok == "bildebok og lydbok";
              } else if (isUnicorny === "Harald Og Josefine") {
                return book.Navn__lest_inn_for == "Harald Og Josefine";
              } else if (isUnicorny === "Liv og Ima") {
                return book.Navn__lest_inn_for == "Liv og Ima";
              } else {
                return true;
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
    );
  }
};

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
        Navn__lest_inn_for
      }
    }
  }
`;

// import SimpleAppBar from "../components/header"
// import PlantCard from "../components/plantCard"
// import Chips from "../components/chip"

// <SimpleAppBar />

// <PlantCard
//               plant={node}
//               tagline="wes is cool"
//               tagline="scott is cool"
//             />
