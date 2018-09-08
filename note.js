console.log("********************starting notesfile**************************");
const fs = require('fs');
const file = "./notes.txt";



let addNote = (title,body)=>{

   checkFile(file);

   let notes = getJsonArray(file);
   if(!filterNote(title)){
   notes.push({title:title,body:body});
   writeString(file,JSON.stringify(notes));
 }
}

let selectAll =()=>{
  checkFile(file);
  let notes = getJsonArray(file);
  notes.forEach((note,index)=>{
    console.log(`---------------------Your Search Results------------------------------`);
    console.log("title : "+note.title);
    console.log("body : "+note.body);
    console.log("---------------------------------------------------");
  });

}

let readNote =(title)=>{
    let noteList = getNotes(title);
    noteList.forEach((note,index)=>{
      console.log(`---------------------${index}------------------------------`);
      console.log("title : "+note.title);
      console.log("body : "+note.body);
      console.log("---------------------------------------------------");
    });
}

let removeNote =(title)=>{

  let array = getJsonArray(file);
  let removeList = getIndex(title,array);
  removeList.forEach((n)=>{
    array.splice(n,1);
  })
  writeString(JSON.stringify(array),file);


}


function getJsonArray(file){

  let rf = fs.readFileSync(file,'utf8');
  return JSON.parse(rf);

}

function writeString(file,data){


      fs.writeFile(file,data,(err)=>{err?console.error(err):console.log('note writed successfully');});

}





function checkFile(file){

  fs.open(file, 'wx', (err, fd) => {

    if (err) {
      if (err.code === 'EEXIST') {
        console.error('myfile already exists');
        return;
      }
}

    writeString(fd,"[]");
  });

}

function filterNote(title){
  let array = getJsonArray(file);
  let dublicated = array.filter((note)=>title===note.title);
  return dublicated.length===0?false:true;
}

function getNotes(title){
  let array = getJsonArray(file);
  let dublicated = array.filter((note)=>title===note.title);
  return dublicated;
}

function getIndex(title ,arrray){

  let l =[];
  let indexList = arrray.filter((note,index)=>{
    if(note.title===title)
     l.push(index);
     false;
  });

  return l;
}



module.exports = {
  addNote,
  selectAll,
  removeNote,
  readNote,


  }
