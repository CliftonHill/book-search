import React from 'react';
  //colors will be a rich red and a calm blue muted background
const styleObj = {
  backgroundColor: "#951313",
  height: "2rem"
}


export default function NavBar() {
  return (
    <nav style={styleObj} >
      <h1 style={{display: "inline-block", margin: "0.2rem", fontSize: "1.6rem"}}>Book Search</h1>
      <div className="menu">
        <a href="/">Home</a>
      </div>

    </nav>
  );
}
