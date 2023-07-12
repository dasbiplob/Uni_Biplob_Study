const fs = require('fs');
const path = require('path');

//create folder
// fs.mkdir(path.join(__dirname,'/test'),{},err => {

//     if(err) throw err;
//     console.log('Folder Created....');
// });


// Create and Write File
// fs.writeFile(path.join(__dirname,'/test','hello.txt'),'Hello World..',err => {

//     if(err) throw err;
//     console.log('File Created....');
// });


//Read File
fs.readFile(path.join(__dirname,'/test','hello.txt'),'utf8',(err,data) =>{
    if(err) throw err;
    console.log(data);

});
