const fs = require('fs');
const os =require('os');
const notes = require('./note.js');
const _ =require("lodash")
const argv = require("yargs").argv;




if(argv.action === "list" ){
   notes.selectAll();
}

else if(argv.action === 'remove')
{
  notes.removeNote(argv.title);
}
else if(argv.action === 'add')
{
  notes.addNote(argv.title,argv.body);
}
else if(argv.action === 'read')
{
  notes.readNote(argv.title);
}
else{
  console.log("command not recognize");
}
