import React from 'react';
  //colors will be a rich red and a calm blue muted background
const styleObj = {
  backgroundColor: "#951313",
  height: "2rem"
}


export default function NavBar() {
  return (
    <nav style={styleObj} >
      <div className="menu">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>

    </nav>
  );
}
