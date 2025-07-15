import { createSideNote } from './components.js'
import { getAllNotes } from './dataLoader.js'




export async function createAllSideNotes() {
    let container = document.querySelector('.main-left-notes-container');
    let notes = await getAllNotes();

    container.textContent = ''
    

    notes.forEach(note => {
        let card = createSideNote(note)
        container.appendChild(card)
    })

}


export function showProject(project) {
    let nameOfProject = document.querySelector('.right-name-note')
    let noteArea = document.querySelector('.main-right-note-container');
}