import React from "react";

const Notes = ({title, notes, note, setNotes}) => {

const deleteNoteEvent = () => {
   setNotes(notes.filter(el => el.id !== note.id))
}

const doneTaskEvent = () => {
   setNotes(notes.map((item) => {
      if (item.id === note.id) {
         return {
            ...item, done: !item.done
         }
      }
      return item;
   } ))
}

   return (
            <div className='note'>
               <li className={`note-item ${note.done ? "done" : ''}`}>{title}</li>
                  <button onClick={doneTaskEvent} className="btn btn-done ">
                      <i className="fas fa-check"></i>
                  </button>
                  <button onClick={deleteNoteEvent} className="btn btn-delete " >
                    <i className="fas fa-trash"></i>
                  </button>
            </div>
   );
}

export default Notes;