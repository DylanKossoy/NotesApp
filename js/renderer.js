import { createSideNote, saveNote } from './components.js'
import { getAllNotes } from './dataLoader.js'
import { setNote } from './dataStore.js'




export function createAllSideNotes() {
    let container = document.querySelector('.main-left-notes-container');
    let notes = getAllNotes();

    container.textContent = ''
    

    notes.forEach(note => {
        let card = createSideNote(note)
        container.appendChild(card)
    })

}


export function showSelectedNote(note) {

    setNote(note)
    let nameOfNote = document.querySelector('.right-name-note')
    let noteArea = document.querySelector('.main-right-note-container');


    nameOfNote.value = ''
    noteArea.value = ''


    nameOfNote.value = note.name
    noteArea.value = note.note

    




}