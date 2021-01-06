# Week 3 Lecture - FSW125

Week 3 & 4 learnign goals => introduction to the req <-> res cycle and express!

## Agenda

    1) Weeks 1 - 2 Recap
    2) The HTTP Req/Res Cycle
    3) Express.js
    4) Nodemon
    5) Representational State Transfer (REST)
    6) Postman
    7) URL Parameters & Queries

### 1. The HTTP Req/Res Cycle

A HTTP req/res cycle is considered stateless .... what does that mean?

By what means can we add "state" to this cycle ??

### 2. Express.js

req, res, and next are called [streams](https://medium.com/developers-arena/streams-piping-and-their-error-handling-in-nodejs-c3fd818530b6), which are special node objects.

http verbs => express routing methods
CRUD vs HTTP

    1)
    2)
    3)
    4)

Each method takes a path and a callback function – Express calls it a "handler", more or less what Node docs call a "request handler." It handles the request that comes in via that particular HTTP verb.

resource operation = ______ + ______ ?

*query strings are not part of the route path.

*resource operation does not equal endpoint!

### 3. Nodemon

*check* *check* .... *check — 1 2*

#### 4. Representational State Transfer

RESTful vs SOAP

    1) client-server seperation
    2) statelessness
    3) uniform interface
    4) cacheable
    5) layered system
    6) code on demand

SOAP -> XML ... exposes their own arbitrary set of operations

### 5. Postman

*tour*

### 5. URL Parameters & Queries

*see assets*

what does https signify within a URI/URL [here](https://doepud.co.uk/blog/anatomy-of-a-url)?
