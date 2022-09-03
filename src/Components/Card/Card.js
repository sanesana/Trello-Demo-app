import React, { useState } from "react";
import { Trash2 } from "react-feather";

import "./Card.css";
import CardInfo from "./CardInfo/CardInfo";

function Card(props) {
  const [showModal, setShowModal] = useState(false);

  const { id, title } = props.card;

  return (
    <>
      {showModal && (
        <CardInfo
          onClose={() => setShowModal(false)}
          card={props.card}
          boardId={props.boardId}
          updateCard={props.updateCard}
        />
      )}
      <div
        className="card"
        draggable
        onDragEnd={() => props.dragEnded(props.boardId, id)}
        onDragEnter={() => props.dragEntered(props.boardId, id)}
        onClick={() => setShowModal(true)}
      > 
        <div className="card_title">
          <div className="card_text">{title}</div> 
        <button className="delete_icon" onClick={() => props.removeCard(props.boardId, id)}><Trash2/></button>
        </div>
        </div>
    </>
  );
}

export default Card;
