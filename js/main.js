import { showCurrentTime, addNewNote } from './components.js'
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
       
    })
    
}