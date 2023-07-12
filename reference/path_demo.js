const path = require('path');

// Base File Name
console.log(path.basename(__filename));

//Directory Name
console.log(path.dirname(__filename));

//File Extension
console.log(path.extname(__filename));

//Create path Object
console.log(path.parse(__filename).base);

//Concatenate Paths
console.log(path.join(__dirname,'Test','Hello.html'));
