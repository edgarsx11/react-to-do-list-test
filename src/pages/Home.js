import React, {useState, Fragment, useEffect} from 'react';
import Form from '../components/Form'
import NotesList from '../components/NotesList';

export const Home = () => {
   const [noteTitle, setNoteTitle] = useState("")
   const [notes, setNotes] = useState([])
   const [condition, setCondition] = useState("all")
   const [filteredNotes, setFilteredNotes] = useState([])

   useEffect (() => {
     getNotesFromLocalDB()
    }, [])

   useEffect (() => {
     filterEvent()
     saveNotesToLocalDB()
   }, [notes, condition])

   const filterEvent = () => {
      switch (condition) {
         case 'done':
            setFilteredNotes(notes.filter(note => note.done === true))
            break;
         case 'active':
            setFilteredNotes(notes.filter(note => note.done === false))
            break;   
         default:
            setFilteredNotes(notes)
      }
   }

 const getNotesFromLocalDB = () =>
 {
   if (localStorage.getItem("notes") === null)
   {
      localStorage.setItem("notes", JSON.stringify([]))
   }
   else
   {
     let notesFromDB  = JSON.parse(localStorage.getItem('notes'))
     setNotes(notesFromDB)
   }
 }  

const saveNotesToLocalDB = () => 
{
      localStorage.setItem("notes", JSON.stringify(notes))
}

   return (
      <Fragment>
         <header>ToDoList web-app</header>
         <Form  
         noteTitle={noteTitle}
         notes={notes} 
         setNotes={setNotes} 
         setNoteTitle = {setNoteTitle}  
         setCondition = {setCondition}
         />
         <NotesList 
         notes={notes} 
         setNotes={setNotes} 
         filteredNotes = {filteredNotes}
         />
      </Fragment>
   )
}
