import React, { useState } from "react"
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import notes from "./notes";
import CreateArea from "./components/CreateArea"
function App() {

  const [notes, setNotes] = useState([])// initally empty array

  // newNote is passed over from props.onAdd(note)
    function addNote(newNote){
      setNotes (prevNotes =>{
       return [...prevNotes, newNote] 
      })

    }

    function deleteNote (id) {
      setNotes(prevNotes =>{
        return prevNotes.filter((noteItem, index) => {
          return index !== id
        })
      })
    }


  return (
    <div >
      <Header />
     <CreateArea onAdd ={addNote} />
     {/* //The CreateArea component is passed the addNote function via the onAdd prop. This setup allows CreateArea to trigger addNote when a new note is submitted. */}
     {/* noteItem is the parameter that receives the current element of the notes array. So, in each iteration of the .map() function, noteItem represents a different element from the notes array.
      */}
     
     {notes.map((noteItem, index) => {
      return <Note 
                  key ={index}
                  id={index}
                  title = {noteItem.title}
                  content= {noteItem.content}
                  onDelete={deleteNote} />    
     })}
      
      
     
      <Footer/>
     
      
    </div>
  )
  
}

export default App;
