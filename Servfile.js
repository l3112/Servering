// Serving Static Files
//return to 1:24:00

const http = require('http');
const fs = require('fs');

http.createServer((req,res)=>{
 
 //const readStream = fs.createReadStream('./static/Travel In System.html')

 // header lets client know what data i'm expecting
// res.writeHead(200,{'Content-type': 'text/html'}); 
 //http status code (200), it's successful
//readStream.pipe(res);
//res is also a writeable stream

//const ReadStream = fs.createReadStream('./static/posi.png')

// header lets client know what data i'm expecting
//res.writeHead(200,{'Content-type': 'image/png'}); 
//ReadStream.pipe(res);


// ********* next part may be tricky ********

const Readstream = fs.createReadstream('./static/STVring.mp3')
// stream is clearly not the right function.
//what is?
 res.writeHead(200,{'Content-type': 'audio/mpeg'}); 
// you can also use application/force-download after content type

Readstream.pipe(res);

}).listen(3000);

// interesting attempt. Good job anyway. 