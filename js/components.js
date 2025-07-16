import { createAllSideNotes, showSelectedNote } from './renderer.js'
import { notes } from '../data/notes.js'
import { getNote } from './dataStore.js'


export function showCurrentTime() {

    let timeText = document.querySelector('.right-current-time')


    let date = new Date()
    let currentTime = date.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    })


    timeText.textContent = currentTime;




}

export function saveNote() {

    let note = getNote()
    if(!note) return

    let currentName = document.querySelector('.right-name-note').value
    let currentNote = document.querySelector('.main-right-note-container').value

    note.name = currentName
    note.note = currentNote
    createAllSideNotes()

   
    
}


export function createSideNote(note) {
    let noteCell = document.createElement('div')
    let noteName = document.createElement('span')

    noteCell.className = 'left-note-cell'
    noteName.className = 'left-note-name'

    noteName.textContent = note.name

    noteCell.appendChild(noteName)
    noteCell.tabIndex = 0;


    noteCell.addEventListener('click', () => {
        showSelectedNote(note)
    })


    return noteCell

}


// add new note +

export function addNewNote() {

    let newObj = {
        name: 'undefined',
        note: ''
    }


    notes.push(newObj);
 
}



