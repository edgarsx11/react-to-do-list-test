import React from "react";
import {v4 as uuidv4} from 'uuid'

function Form ({noteTitle, setNoteTitle, notes, setNotes, setCondition})  {

   const noteNameInput = (e) => {
      console.log(e.target.value)
      setNoteTitle(e.target.value)
   };

   const submitNoteEvent = (e) => {
      e.preventDefault();
      setNotes([...notes, {title: noteTitle, done:false, id: uuidv4()}]);

      setNoteTitle (" ");
   }

   const conditionEvent = (e) => {
      setCondition(e.target.value);
   }

   return (
   <form>
      <input value={noteTitle} type="text" onChange={noteNameInput} className="todo-input" />
      <button onClick={submitNoteEvent} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={conditionEvent} ame="todos" className="filter-note">
          <option value="all">All tasks</option>
          <option value="done">Done tasks</option>
          <option value="active">Active tasks</option>
        </select>
      </div>
    </form>
   )
}

export default Form