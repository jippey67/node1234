const notes = require('./notes.js');
const yargs = require('yargs');
const chalk = require('chalk');

//Create add command
yargs.command({
    command: 'add',
    describe: 'Add a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

//Create add remove
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        notes.removeNote(argv.title)
    }
})

//Create list command
yargs.command({
    command: 'list',
    describe: 'List notes',
    handler: function() {
        notes.listNotes()
    }
})

//Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        notes.readNote(argv.title)
    }
})

yargs.parse()