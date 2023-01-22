import Note from './models/Note'
export default (io) => {
    io.on('connection', (socket) => {

        const emitNotes = async () => {
            const notes = await Note.find()
            io.emit('server:loadNotes', notes)
        }
        emitNotes()
        
        socket.on('client:newNote', async (data) => {
            const newNote = new Note(data)
            const saveNote = await newNote.save()
            io.emit('server:newNote', saveNote)
        })

        socket.on("client:deleteNote", async (id) => {
            await Note.findByIdAndDelete(id)
            emitNotes()
        })

        socket.on("client:getNote", async(id) => {
            const note = await Note.findById(id)
            socket.emit('server:selectedNote',  note)
        })

        socket.on("client:updateNote", async (updatedNote) => {
            await Note.findByIdAndUpdate(updatedNote._id, {
                title: updatedNote.title,
                description: updatedNote.description
            })
            emitNotes()
        })
    })
}