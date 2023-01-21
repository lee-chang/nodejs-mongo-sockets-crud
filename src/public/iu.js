import { deleteNote, saveNote, getNoteById, updateNote } from "./sockets.js"

const notesList = document.getElementById("notes")
const titleNote = noteForm["title"]
const descriptionNote = noteForm["description"]

let saveId = ""

const noteUI = (note) => {
    const div = document.createElement("div")
    div.innerHTML = `
        <div class="card card-body rounded-0 mb-2 animate__animated animate__fadeInUp">
            <div class="d-flex justify-content-between">
                <h1>${note.title}</h1>
                <div>
                    <button class="btn btn-danger btn-sm delete" data-id="${note._id}">Eliminar</button>
                    <button class="btn btn-secondary btn-sm update" data-id="${note._id}">Actualizar</button>
                </div>
            </div>
            <p>${note.description}</p>
        </div>
    `
    const btnDelete = div.querySelector('.delete')
    const btnUpdate = div.querySelector(".update")
    btnDelete.addEventListener("click", e => deleteNote(btnDelete.dataset.id))
    btnUpdate.addEventListener("click", e => getNoteById(btnUpdate.dataset.id))
    
    return div
}

export const fillForm = (note) => {
    titleNote.value = note.title
    descriptionNote.value = note.description
    saveId = note._id
}

export const renderNotes = (notes) => {
    notesList.innerHTML= ''
    notes.forEach( note => notesList.append(noteUI(note)));

}

export const appendNote = (note) => {
    notesList.append(noteUI(note))
}

export const onHandleSubmit = (e) => {
    e.preventDefault()
    if (saveId) {
        updateNote(saveId,titleNote.value,descriptionNote.value)
    }    
    else {
        saveNote(titleNote.value, descriptionNote.value)
    }
    saveId = ""
    titleNote.value = ""
    descriptionNote.value = ""
}