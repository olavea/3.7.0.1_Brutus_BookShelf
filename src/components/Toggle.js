
import React, { useState } from "react"

const App = () => {
    const [isUnicorny, setUnicorn] = useState('')

    return (
      <div className="main-wrapper">


        <form onSubmit={event => {
          event.preventDefault();
          formSubmit(isUnicorny, setUnicorn );


        }}

          <input
            type="text"
            onChange={event setUnicorn(event.target.value)}
            value={isUnicorny}
            />
        </form>
      </div>

    )
    const formSubmit = ( value, setValue ) = > {
        console.log('something + value +');
        setValue('')
    }
}

export default Toggle


// let chip = "kaniner"
// let isUnicorny = "har passord"

// {
//     if (isUnicorny === "kaniner") {
// } else if (
//     [isUnicorny === "kaniner", isUnicorny === "har passord"]
//   ) {
//     return (
//       book.Enhj_rninger_eller_kaniner == "kaniner" &&
//       book.passord == "har passord"
//     )
//   } else if (
//     [isUnicorny === "Enhjørning", isUnicorny === "har passord"]


//     ) {
//     return (
//       book.Enhj_rninger_eller_kaniner == "Enhjørning" &&
//       book.passord == "har passord"
//     )
//   } else {
//     return true
//   }
// }



// [isUnicorny === "kaniner", isUnicorny === "har passord"]

// er isUnicorny bare en variabel?

// contains kaniner og && "har passord"

// Kan jeg ha denne syntaxen?

// if (book.Pris === !"no input") {
//     return

// if (setKanin === "kaniner") {
//     return book.Enhj_rninger_eller_kaniner == "kaniner"
//   } else if (setKanin === "Enhjørninger") {
//     return book.Enhj_rninger_eller_kaniner == "Enhjørninger"
//   } else {
//     return true
//   }
// })

