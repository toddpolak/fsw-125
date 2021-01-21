# Week 5 Lecture - FSW125

Learnign goals for weeks 5 & 6 => Now that we have hands on experience with node and express a general refresh to cement important topics from weeks past while filling in any gaps that were missed from previous lectures. Our main goal here is to prepare ourselves for the capstone project and fill in any knowledge gaps. Anything not covered today can be covered in week 7 lecture where there will be little to any new material.

## Agenda

    1) Week's 3 - 4 Recap & Questions
    2) Capstone
    3) Middleware
    4) URL Parameters & Queries 

### 1. Week's 3 - 4 Recap

- HTTP Req, Res Cycle
- Express.js
- Nodemon
- REST

### 2. Capstone

### 3. Middleware

Express is a routing and middleware web framework that has minimal functionality of its own: An Express application is essentially a series of middleware function calls.

Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.

Middleware functions can perform the following tasks:

- Execute any code.
- Make changes to the request and the response objects.
- End the request-response cycle.
- Call the next middleware function in the stack.

If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging.

*see assets*

### 4. URL Parameters & Queries

A query string is the part of a URL (Uniform Resource Locater) after the question mark (?). It is meant to send small amounts of information to the server via the url. This information is usually used as parameters to query a database.

*see assets*

    Here is an example of a URL with query strings attached:
    
    https://stackabuse.com/?page=2&limit=3

    The query parameters are the actual key-value pairs like page and limit with values of 2 and 3, respectively.

Your query parameters can be retrieved from the query object on the request object sent to your route (req.query). It is in the form of an object in which you can directly access the query parameters you care about. In this case Express handles all of the URL parsing for you and exposes the retrieved parameters as this object.
