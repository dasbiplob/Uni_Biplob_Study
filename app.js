const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = 'localhost';
//const port = process.env.Port || 3000;
const port = 3000;

fs.readFile('index.html',(error, html)=>{

    // if(error){
    //     throw error;
    // }


     const server = http.createServer((req, res) => {
    //     // res.statusCode=200;
    //     // res.setHeader('Content-type','text/html');
    //     // res.write(html);
    //     // res.end();

    //     if(req.url === '/api/users'){
    //         const users = [
    //             {name: 'Biplob Das', age: 40},
    //             {name: 'Sneha Ghosh', age: 30}
    //         ];
    //         res.writeHead(200,{'Content-type': 'applicaion/json' });
    //         res.end(JSON.stringify(users));
    //     }
    
    //build Path
    let filePath = path.join(__dirname,'public',req.url === '/' ? 'index.html':req.url);
    // console.log(filePath);
    // res.end();

    //Extension of File
    let extname = path.extname(filePath);

    //Initial Content Type
    let contentType = 'text/html'; 

    // Check ext and set content type
  switch (extname) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
  }
  // Check if contentType is text/html but no .html file extension
  if(contentType == "text/html" && extname == "") filePath += ".html";
  // log the file
  console.log(filePath);

  //Read File 
  fs.readFile(filePath,(err,content) => {
    if(err){
        if(err.code == 'ENOENT'){
            //Page Not Found
            fs.readFile(path.join(__dirname,"public","404.html"),
            (err,content) => {
                res.writeHead(404, {"Content-Type": "text/html"});
                res.end(content,"utf8");
            });
        }else {
            //Some server Error
            res.writeHead(500);
            res.end(`Server Error: ${err.code}`);
        }
    }else {
        //Success
        res.writeHead(200, {"Content-Type": contentType});
        res.end(content,"UTF8");
    }

  });

});
    server.listen(port,hostname, () =>{
        console.log('Server Started on Port',{port});
    });
});
