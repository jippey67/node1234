const fs = require('fs')

const getNotes = function() {
    return 'Your notes'
}

const addNote = function(title, body){
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function(note) {
        return note.title === title
    })

    debugger

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('New note added')
    } else {
        console.log('Note titile taken')
    }
    
}

const removeNote = function (title) {
    const notes = loadNotes()
    const filteredNotes = notes.filter(function(note, index, arr){
        return note.title !== title
    })
    if (notes.length === filteredNotes.length) {
        console.log('Note titile not found')
    } else {
        saveNotes(filteredNotes)
        console.log(`Note with title ${title} removed`)
    }
}

const listNotes = function () {
    const notes = loadNotes()
    notes.forEach(element => {
        console.log(element.title)
    });
}

const readNote = function(title) {
    const notes = loadNotes()
    const filteredNotes = notes.filter(function(note, index, arr){
        return note.title === title
    })
    if (filteredNotes.length === 0){
        console.log('Note doesnt exist')
    } else {
        console.log(filteredNotes[0].body)
    }
}


const loadNotes = function() {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        console.log(e)
        return []
    }
    
}

const saveNotes = function(notes) {
    fs.writeFileSync('notes.json', JSON.stringify(notes))
}

module.exports = {
    getNotes,
    addNote,
    removeNote,
    listNotes,
    readNote   
}