import React, {useState} from 'react';
import Rating from '@material-ui/lab/Rating';
import Fade from '@material-ui/core/Fade';
import Box from '@material-ui/core/Box';
import Button from "@material-ui/core/Button";

function SimpleRating(props) {
  return (
    <div>
    <Box component="fieldset" mb={0} borderColor="transparent">
      <Rating name="read-only" value={props.stars} size="small" readOnly />
    </Box>
    </div>
  );
}

// const [modalTest, setModalTest] = useState(false)


function TileSummary (props) {
  const [modalState, setModalState] = useState(false);
  const [flowState, setFlowState] = useState("");
  const [open, setOpen] = useState(false);

  function toggleModalState () {
    setModalState(!modalState);
    if (flowState === "") {
      setFlowState("hidden");
      setOpen(true);
     document.querySelector(`.${props.id}`).classList.add("showModal-true");
      document.querySelector("body").style.overflow = "hidden";
  } else {
    setFlowState("");
    setOpen(false);
    document.querySelector(`.${props.id}`).classList.remove("showModal-true");
    document.querySelector("body").style.overflow = "auto";
  }
  }

  return (
    <div>
    <img src={"images/" + props.image} onClick={toggleModalState}/>
    <SimpleRating stars={props.stars} />

    <Fade in={open}>
    <div className={`modalBackground showModal-${modalState}`}>
      <div className="modalInner">
        <div className="modalLeft">
          <div className="modalImage">
            <img src={"images/" + props.image} />
          </div>
          <div className="modalAbout">
          {props.title}<br />
          by {props.author}<br />
          <p>
          <span className="price">${parseFloat(props.price).toFixed(2)}</span> <span className="list-price">${parseFloat(props.listPrice).toFixed(2)}</span></p>
          <Button style={{marginBottom: "1rem", backgroundColor: "#951313"}} size="small" variant="contained" color="primary" disableElevation>Buy</Button>
          </div>
        </div>
        <div className="modalRight">
          <div className="modalSummary">
          <SimpleRating stars={props.stars} />
          <div style={{textAlign: "left"}}>{props.review.substr(0, 300) + "..."} <button className="more">More</button></div>
          </div>
          <div className="exit-spacing"><span className="exit" onClick={toggleModalState}>exit</span>
          </div>
        </div>
      </div>
    </div>
    </Fade>
    </div>
  );
}

export default TileSummary;
// import to tile, then see if I can get modalopenstatus to log, if so, then I can just update the class that way to make it change when needed to use showmadaltrue
