import React from "react"

const Toggle = ({ isToggled, setToggle }) => {
  return (
    <div>
      <button onClick={() => setToggle(!isToggled)}>Kaninbøker</button>
      {isToggled && <h2>Kaninbøker</h2>}
    </div>
  )
}

export default Toggle
