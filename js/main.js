import { showCurrentTime } from './components.js'
import { getAllNotes } from './dataLoader.js'


setInterval(() => {
    showCurrentTime();
}, 1000)


getAllNotes();