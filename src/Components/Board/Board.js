import React from "react";
import { MoreHorizontal,Plus } from "react-feather";

import Card from "../Card/Card";
import Editable from "../Editabled/Editable";

import "./Board.css";

function Board(props) {

const {id}=props.board;

  return (
    <div className="board"
    onDragEnter={() => props.dragEntered(id,"")}
    >
      <div className="board_header"
      >
        <p className="board_header_title">
          {props.board?.title}
          <span>{props.board?.cards?.length || 0}</span>
        </p>
        <div
          className="board_header_title_more"
        >
          <MoreHorizontal />
          <Plus/>          

        </div>
      </div>
      <div className="board_cards custom-scroll" 
     
      >
        {props.board?.cards?.map((item) => (
          <Card
            key={item.id}
            card={item}
            boardId={props.board.id}
            removeCard={props.removeCard}
            dragEntered={props.dragEntered}
            dragEnded={props.dragEnded}
            updateCard={props.updateCard}
          />
        ))}
        <Editable
          text="+ Add Card"
          placeholder="Enter Card Title"
          displayClass="board_add-card"
          editClass="board_add-card_edit"
          onSubmit={(value) => props.addCard(props.board?.id, value)}
        />
      </div>
    </div>
  );
}

export default Board;
