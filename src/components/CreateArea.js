import React, { useState } from "react"

function CreateArea(props){ //to catch addNote()
   //stateful constants
     const [note, setNote] =  useState({
        title: "",
        content:""
    })

    function handleChange(event){
        const name = event.target.name
        const value =  event.target.value

     // same as ,  const {name, value} = event.target   
   //this (above) is destructured
    
        setNote(prevNote =>{
            return{
                ...prevNote,
                [name]: value
            }
        })
   
   
    }
 
    function submitNote(event){
        props.onAdd(note) //this note is the current created note.
        setNote({
            title:"",
            content:""
        })
        event.preventDefault()// when we click add, this will prevent the page from reloading

    }

  
    
    return(
        <div>
            <form>
                <input name="title" 
                       placeholder="Title"
                       value ={note.title}
                       onChange={handleChange}/>
                <textarea name="content"
                          placeholder="Take a note" 
                          rows="3"
                          onChange={handleChange}/>
                <button type="submit" onClick={submitNote}>Add</button>
            </form>
        </div>
    )
}

export default CreateArea ;