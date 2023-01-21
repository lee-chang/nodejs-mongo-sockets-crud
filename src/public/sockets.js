const socket = io()

export const loadNote = (callBack) => {
    socket.on('server:loadNotes', callBack)
}

export const saveNote = (title, description) => {
    socket.emit('client:newNote', {
        title,
        description
    })
}

export const onNewNote= (callBack)  => {
    socket.on('server:newNote', callBack)
}

export const deleteNote = (id) => {
    socket.emit("client:deleteNote", id)
}
export const getNoteById = (id) => {
    socket.emit ("client:getNote", id)
}

export const onSelected = (callBack) => {
    socket.on("server:selectedNote", callBack)
}

export const updateNote = (id, title, description) => {
    socket.emit("client:updateNote", {
        _id: id,
        title,
        description
    })
}