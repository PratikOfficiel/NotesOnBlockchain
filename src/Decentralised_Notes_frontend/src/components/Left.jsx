import React from "react";
import { useEffect } from 'react';
import { FaPlus } from "react-icons/fa6";
import { Decentralised_Notes_backend } from '../../../declarations/Decentralised_Notes_backend'
import Note from "./Note";

function Left(){
    
    const [newnote,setnewnote] = React.useState({
        title:"",
        message:""
    });
    
    function updateNote(event){
        const {name,value} = event.target;
        
        setnewnote(previousvalue => {
            return {
                ...previousvalue,
                [name]: value
            };
            
        })
    }
    
    const [noteslist,updatenotelist] = React.useState([]);
    
    function updateList(event){

        Decentralised_Notes_backend.createNote(newnote.title, newnote.message);
        updatenotelist(prev=>{
            return(
                [newnote, ...prev ]
            );
        })
    
        event.preventDefault();
        setnewnote({
            title:"",
            message:""
        })
    }

    useEffect(() => {
      fetchData();
    }, []);


    async function fetchData() {
        const notesArray = await Decentralised_Notes_backend.readNotes();
        updatenotelist(notesArray);
    }
    

    function deleteNote(id){

        Decentralised_Notes_backend.deleteNote(id);
        updatenotelist(prevNotes=>{
            return prevNotes.filter((note, index)=>{
                return index !== id;
            });
        });
    }
    
    const [shownote, setshownote] = React.useState(false);

    function expandnote(){
        setshownote(true);
    }

    return(
        <div className="left">

            <form className="TakeNote">
                <input onClick={expandnote} name = "title" value={newnote.title} onChange={updateNote} placeholder="Title..." autoComplete="off" />
                {shownote && <textarea name="message" value={newnote.message} onChange={updateNote} placeholder="Note Details..." rows="3" autoComplete="off" />}
                {shownote && <button onClick={updateList}><span className="AddIcon"><FaPlus/></span></button>}
                
            </form>

            <div className="Notecollection">
                {noteslist.map((note,index)=>{
                    return(
                        <Note
                        key = {index}
                        id = {index}
                        title = {note.title}
                        message = {note.message}
                        onDelete = {deleteNote}
                        />
                    )
                })}
            </div>    
    
        </div>
    );
}

export default Left;