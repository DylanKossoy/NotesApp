


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

export function saveNote(note) {
    
}


export function createSideNote(note) {
    let noteCell = document.createElement('div')
    let noteName = document.createElement('span')

    noteCell.className = 'left-note-cell'
    noteName.className = 'left-note-name'

    noteName.textContent = note.name

    noteCell.appendChild(noteName)


    return noteCell

}


// add new note +

export async function addNewNote() {

    const newObj = {
        name: 'note',
        note: 'notenote',
        lastSaved: '2999',
        lastUpdated: '4444'
    }


    const options = {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json',
        },
        data: JSON.stringify(newObj)
    }


    let response = await fetch('../data/notes.json', options)


    console.log(response.status);
    
}


