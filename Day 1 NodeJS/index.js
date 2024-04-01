
const http = require('http');
const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
});
server.listen(port, hostname, ()=>{
    console.log(`Server running at http://<span class="math-inline">\{hostname\}\:</span>{port}/`);
})


//1. ROUTING
//In Express.js routing is the mechanism that determines how your application responds to incoming client requests. It essentially maps to a specific URL path(endpoint) and HTTP METHODS(Like GET, POST) to a
// function handles that request 
// 1. Routes:
//A router represents a combination of an HTTP method and a URL path
// It specifies how the server should respond to requests targeting that particular endpoind.
//2. HTTP methods:
//Express.js supports all standard HTTP methods like GET(retrieve data), POST(create data), PUT(update data), DELETE(delete data), etc
//Each method has a specific purpose and is used accordingly in your routes.
//3. Route Handlers:
//They are Javascript functions that are executed when a request matches specific route.
//They handle the request logic, such as fetching data from a database, processing form submissions or sending responses.
//4. Defining Routes:
//You define routes using methods provided by the Express app object.
// the syntax is:
// app.<HTTP_METHOD>(PATH, handlerfunction) example

app.get('/', (req, res) => {                    //The route handles GET request to the root path(/) and sends the response "Hello there".
    res.send('Hello there');
});

//Benefits of routing:
/*
>Organized Code: Routing helps structure your application by separating concers. You can group related routes and handlers for better maintainability.
>Flexibilty: You can define different behaviour for various HTTP methods and URL paths, catering to adverse client interactions.
>Clear URLs: Well defined routes lead to more meaningful and predictable URLs for your application.




*/




//Respond with Hello World on the homepage
app.get('/', (req, res) => {
    res.send('Hello world!')
})
//Respond to POST request on the root route(/), the application's home page:
app.post('/', (req, res) => {
    res.send('Got a Post Request')
})
//Respond to PUT request to the /user route:
app.put('/user', (req, res) => {
    res.send('Got a PUT request at /user')
})
//Respond to a DELETE request to the /user route:
app.delete('/user', (req, res) => {
    res.send('Got a DELETE request at /user')
})

console.dir(req.hostname)
console.dir(req.ip)
