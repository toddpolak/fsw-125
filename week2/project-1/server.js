const express = require("express");
const app = express();

const users = [
    { name: 'Todd Zappone', age: 48 },
    { name: 'John Doe', age: 26 },
    { name: 'Jane Doe', age: 30 },
    { name: 'Mike Smith', age: 47},
    { name: 'Ann Smith', age: 39}
]

const cats = [
    { type: 'Jaguar', url: 'britannica.com/animal/jaguar-mammal' },
    { type: 'Cheetah', url: 'britannica.com/animal/cheetah-mammal' },
    { type: 'Lynx', url: 'britannica.com/animal/lynx-mammal' },
    { type: 'Lion', url: 'britannica.com/animal/lion' },
    { type: 'Tiger', url: 'britannica.com/animal/tiger' }
]

const books = [
    { name: 'Learning React: Functional Web Development with React and Redux', author: 'Alex Banks and Eve Porcello' },
    { name: 'Practical Node.js: Building Real-World Scalable Web Apps', author: 'Azat Mardan' },
    { name: 'Web Development with Node and Express: Leveraging the JavaScript Stack', author: 'Ethan Brown' },
    { name: 'Beginning Node.js, Express & MongoDB Development', author: 'Greg Lim' },
    { name: 'JavaScript Patterns: Build Better Applications with Coding and Design Patterns', author: 'Stoyan Stefanov' }
]

app.get('/users', (req, res) => {
    res.send(users);
});

app.get('/cats', (req, res) => {
    res.send(cats);
});

app.get('/books', (req, res) => {
    res.send(books);
});

app.listen(3000, () => {
    console.log("App is listening on port 3000!");
});
