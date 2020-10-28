import React from 'react';
import TileSummary from "./tile-summary";

const styleObj= {
  backgroundColor: "rgb(47, 67, 106, 80%)"
}
//showModal-${modalState}

export default function Tile(props) {

  return(
    <div style={styleObj} className="tile">


        <TileSummary image={props.image} stars={props.stars} title={props.title} authors={props.authors} publishDate={props.publishDate} description={props.description} previewLink={props.previewLink} id={props.id} publisher={props.publisher}/>


    </div>

  );
};
