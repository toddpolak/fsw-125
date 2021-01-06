// req/res cycle takeaways
// singular and complete in nature
// stateless


// state => keeping track of the current changes of somethign


// In computing, a stateless protocol is a communications protocol in which no session information is retained by the receiver, usually a server. 
// Relevant session data is sent to the receiver by the client in such a way that every packet of information transferred can be understood in isolation, 
// without context information from previous packets in the session. This property of stateless protocols makes them ideal in high volume applications, 
// increasing performance by removing server load caused by retention of session information.

// current changes of the applciation
// statefull => it contains and knows about its own changes
// stateless => does NOT know about its changes and does NOT keep track of any changes or anythign at all really


// 3 ways we can add state to a application === persist data 
// cookies -> js bases
// localStorage/sessionStorage -> js based
// database -> external


// cookies are incredible small usually under 4kb
// can expire 


localStorage.setItem('key', 'value')
localStorage.removeItem('key')
const exampleStorage = localStorage.getItem()


// req <-> res HTTTP cycle 

// ****** streams are special node objects whichw e treat EXACTLY like js objects we are used to 

// req, res = {
//     body ={},
//     header ={},
//     payload ={}
// }

const jsObjWeKnow = {
    property: 'value',
    anotherProp: function() {}
}

// JSON 
const jsonObj = {
    "property": value,
    "anotherProperty": 'some value'
} // must use double quotes for string named properties

// we can send req and repsonses as strings but if we need more complex data types like objects or arrays 
// we must wrap them in a JSON obj

// JSON.stringify()
// JSON.parse()


// res.header -> status code 


// stateful === persists 

// If every req <-> res cycle is stateles than
// every singular cycle is independent 
// meanign one cycle does not know anythign about the other cycle


// every req is unique 


// ** there are ways to add state to the internet

// cacheable
// two ways to add "state" to our cycle is with
// cookies and local storage

// crud vs http verbs vs express methods that map directly to our HTTP 

// create  ------>  POST       -> .post

// read    ------>   GET       -> .get

// update   ------>  PUT       -> .put

// delete   ------>  DELETE     -> .delete

// REST


// resource operation = route path + HTTTP method

// API is really jsut logic we write to interact with our server

// clicks login button
// form data is bundled into a htttp req and sent to server
// API gets a request
// API looks at req.header
// header contains a HTTP method and a query string
// API then turns around to the database
// API follows restful practices and uses req.body to check the database for a username and password
// Database checks and tells API either yes found (200) === here is a token send it back to the person so we dont have to send sensitive info and they can use that token to access their account 
// || that username and passowrd was NOT found (404) === send a 404 code and this message back to the client "your username or password is inccorrect"

