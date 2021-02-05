# Week 7 Lecture - FSW125

Learnign goals for weeks 7 & 8 => Dive deeper into Postman's advanced features while spending some more time on error handling. 
At this point we should be well on our way into the capstone project so come prepared with any questions you may have as there will be 
time to go over anything you still need to freshen up on.

## Agenda

    1) Week's 5 - 6 Recap & Questions
    2) Error Handling
    3) Postman
    4) Q&A

### 1. Week's 5 - 6 Recap

- Capstone
- Middleware
- URL Parameters & Queries

### 2. Error Handling

Error Handling refers to how Express catches and processes errors that occur both synchronously and asynchronously. 
Express comes with a default error handler so you don’t need to write your own to get started.

It’s important to ensure that Express catches all errors that occur while running route handlers and middleware.

Errors that occur in synchronous code inside route handlers and middleware require no extra work. 
If synchronous code throws an error, then Express will catch and process it. For example:

    app.get('/', function (req, res) {
        throw new Error('BROKEN') // Express will catch this on its own.
    })

For errors returned from asynchronous functions invoked by route handlers and middleware, you must pass them to the next() function, where 
Express will catch and process them. For example:

    app.get('/', function (req, res, next) {
        fs.readFile('/file-does-not-exist', function (err, data) {
        if (err) {
            next(err) // Pass errors to Express.
        } else {
            res.send(data)
        }
        })
    })

### 3. Postman

### 4. Q & A
