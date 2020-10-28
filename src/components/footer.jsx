import React from 'react';

const objStyle = {
  backgroundColor: "#4968a7",
  width: "100%",
  textAlign: "center",
  paddingTop: "0.5rem",
  position: "absolute",
  bottom: "0",
  height: "4rem",
  marginTop: "5rem"
}

export default function Footer () {
  return (
    <footer style={objStyle}>
    &copy; 2020 by Clifton Hill<br />
  Contact info - <a href="https://github.com/cliftonhill">GitHub</a> / <a href="https://cliftonhill.github.io">Web Dev Portfolio</a>

    </footer>
  )
}
