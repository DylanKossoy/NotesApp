import { showCurrentTime, addNewNote, saveNote } from './components.js'
import { createAllSideNotes } from './renderer.js'


init()


function init() {
    setInterval(() => {
        showCurrentTime();
    }, 1000)
    
    
    createAllSideNotes()

    let button = document.querySelector('.add-note-button');
    button.addEventListener('click', () => {
        addNewNote()
        createAllSideNotes()
       
    })

    let saveButton = document.querySelector('.save-note-button');

    saveButton.addEventListener('click', () => {
      saveNote()
        
    })
    
}