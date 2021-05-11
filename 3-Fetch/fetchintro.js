// fetch- request and respnse
// fetch() takes in resources path as a mandatory argument
// request object returns a promise that resolves response
// after retrieving a respinse, a miltitidue of mehods definte the bodt content and how it will be handled
// *can* use Request() and Response() constructors to directly create requests abnd responses
// Request - method of request (ie GET, POST etc)- the url, associated headers etc
// Response- response to request- contains header, url but also status code to determine whetehr or not was accurate
// Body contains methos relating to main content of response-request that allow you to specify content type and how to handle it

fetch('https://rickandmortyapi.com/api/location/')
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson){
        console.log(myJson);
    })

    // website is the argument- path of desrired resource
    // response will return some json
    // the respnse is only an http response, so the json() method extracts the json
    // fetch is promise based