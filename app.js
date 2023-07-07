const http = require('http');
const fs = require('fs');

const hostname = 'localhost';
const port = 3000;

fs.readFile('index.html',(error, html)=>{

    if(error){
        throw error;
    }
    const server = http.createServer((req, res) => {
        res.statusCode=200;
        res.setHeader('Content-type','text/html');
        res.write(html);
        res.end();
    });
    
    server.listen(port,hostname, () =>{
        console.log('Server Started on Port'+port);
    });
});
