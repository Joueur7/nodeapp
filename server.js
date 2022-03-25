const http = require("http");
const fs = require("fs");

const myserver = http.createServer((request, response)=>{
    response.writeHead(200, { 'Content-type':'text/html'})
    var myurl = request.url;

    if (myurl === "/about"){
        response.write("<h2>About Page</h2>")
    }else if (myurl === "/home"){
        const content = fs.readFileSync("./htmlpages/index.html")
        response.write(content)
    }else if (myurl === "/contact"){
        const content1 = fs.readFileSync("./htmlpages/contact.html")
        response.write(content1)
    }else{
        response.write("<h2>Server Worked</h2> <p>"+myurl+"</p>")
    }
    response.end();
})

myserver.listen(3000);

myserver.on("connection",(result)=>{
    console.log("Connection established")
})