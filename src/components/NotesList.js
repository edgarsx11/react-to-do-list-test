import React from "react";
import Notes from './Notes';

const NotesList = ({notes, setNotes, filteredNotes}) => {

   return (
      <div className="notes-container">
         <ul className="notes-list">
            {filteredNotes.map(note => (<Notes notes={notes} setNotes={setNotes} key={note.id} title={note.title} note={note}/>))}
         </ul>
      </div>
   )
}

export default NotesList;