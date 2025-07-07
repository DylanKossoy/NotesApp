


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