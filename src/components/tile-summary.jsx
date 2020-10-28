import React, {useState} from 'react';
import Fade from '@material-ui/core/Fade';
import Button from "@material-ui/core/Button";

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

  function handleMore () {
    window.location.href = props.previewLink;
  }

  let shortDescript = props.description.length > 120 ? props.description.substr(0,120) + "..." : props.description.substr(0,120);
  let longDescript = props.description.length > 850 ? props.description.substr(0,850) + "..." : props.description.substr(0,850);

  return (
    <div className={`tile-contents ${props.id}`} onClick={toggleModalState}>
      <div className="tile-left" >
          <img src={props.image} alt={props.title} />
      </div>
      <div className="tile-right">
        <div>{props.title}<br />
        <span className="text-low-emphasis">by {props.authors} - {props.publishDate}</span></div>
        <div style={{textAlign: "left", marginTop: "0.5rem"}}>{shortDescript}
        </div>
      </div>

    <Fade in={open}>
    <div className={`modalBackground showModal-${modalState}`}>
      <div className="modalInner">
        <div className="modalLeft">
          <div className="modalImage">
            <img src={props.image} alt={props.title} />
          </div>
          <div style={{padding: "0.5rem"}}>
          {props.title}<br />
          <div className="text-low-emphasis">by {props.authors}<br /><br />
          {props.publisher} - {props.publishDate}</div>
          </div>
        </div>
        <div className="modalRight">
          <div className="modalSummary">

          <div className="modalDescription" style={{textAlign: "left"}}>{longDescript}</div>
          <Button className="more" onClick={handleMore} style={{marginTop: "0.5rem", backgroundColor: "#951313"}} color="primary" variant="contained"  disableElevation>Go To Book Page</Button>
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
