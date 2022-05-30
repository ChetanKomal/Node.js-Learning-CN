const http = require('http');
const port = 8000;
const fs = require('fs');


function requestHandler(req, res){
    console.log(req.url);
    res.writeHead(200, {'content-type': 'text/html'});
    let filePath;
    switch(req.url){
        case '/':
            filePath = './index.html'
            break;
        case '/profiles':
            filePath = './profiles.html'
            break;
        default:
            filePath = './404.html'    
    }
    fs.readFile(filePath, function(err,data){
        if(err){
            console.log('error', err);
            return res.end('<h1>Error!</h1>');
        }
        return res.end(data);
    })
    
    //res.end("<h1>chetanverma</h1>"); -> we can just simply use this to send response to theclient as inline html or some text 
}

const server = http.createServer(requestHandler);



server.listen(port, function(err){
    if(err){
        console.log(err);
        return;
    }

    console.log("Server is up and running on port:", port);
});