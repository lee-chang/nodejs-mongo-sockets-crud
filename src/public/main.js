import { loadNote, onNewNote, onSelected } from "./sockets.js"
import { appendNote, onHandleSubmit, renderNotes, fillForm } from "./iu.js"

onNewNote(appendNote)
loadNote(renderNotes)
onSelected(fillForm)


const noteForm = document.querySelector("#noteForm")

noteForm.addEventListener("submit", onHandleSubmit)