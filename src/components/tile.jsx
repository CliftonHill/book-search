import React, {useState} from 'react';
import TileSummary from "./tile-summary";

const styleObj= {
  backgroundColor: "rgb(47, 67, 106, 80%)"
}
//showModal-${modalState}

export default function Tile(props) {

  return(
    <div style={styleObj} className="tile">
      <div className={`tile-contents ${props.id}`} >

        <TileSummary image={props.image} stars={props.stars} title={props.title} author={props.author} listPrice={props.listPrice} price={props.price} review={props.review} id={props.id}/>
      </div>

    </div>

  );
};
