// What is an API? Application prgram interface
// allows applicatiosn to communitcate with one another
// not the database or server
// allows us access points to the server- comes in the form of an endpoint

// asynchronous programming
// allows a program to do more than one thing at a time
// continues to run while waiti on response form api, when it receives the data, presents without having to wait on anythign else

// fetch is part of browser, NOT js (ie need to test in browser, not vs code)
// fetch- async method- strarts the process of fetching a resource from the network- returns a promise which is fulfilled once the response is available

// promises- always either pending/fulfilled/rejected
// pending- initial state- neither fulfilled nor rejected
// fulfilled- operation completed sucessfully
// rejected- operationn failed

const baseUrl = 'https://api.spacexdata.com/v3/rockets';
// const because we dont want baseURL to change, copy and paste from the api location

const searchForm = document.querySelector('form');
const spaceShips = document.querySelector('ul');

console.log(searchForm,spaceShips);

function fetchSpace() {
    event.preventDefault();
    // 1
    fetch(baseUrl)
        .then(results => {
            console.log(results);
            //      2
            return results.json();

        })
        .then(json => {
            console.log(json);
            // 3
            displayRockets(json);
        })
        // 4
        .catch(err => console.log(err))
}

// fetchSpace();

// 1 fetch()- method starts the process of fetching a resource from a network. returns a promise which is fulfilled once the response is available- json- javascipt object notation

// 2 capture the resulrs from the api in a promise resolvers received as json, done by using the json method()
// 3
// 4

function displayRockets(rockets) {
    console.log('API Response: ', rockets);
    rockets.forEach(r => {
        console.log(r);
        let rocket = document.createElement('li');
        rocket.innerText = r.rocket_name;
        spaceShips.appendChild(rocket);
    });


let rocketOne = document.createElement('li');
let rocketTwo = document.createElement('li');
let rocketThree = document.createElement('li');
let rocketFour = document.createElement('li');

rocketOne.innerText = `sample:  ${rockets[0].rocket_name}`;
rocketTwo.innerText = `sample:  ${rockets[1].rocket_name}`;
rocketThree.innerText = `sample:  ${rockets[2].rocket_name}`;
rocketFour.innerText = `sample:  ${rockets[3].rocket_name}`;

spaceShips.appendChild(rocketOne);
spaceShips.appendChild(rocketTwo);
spaceShips.appendChild(rocketThree);
spaceShips.appendChild(rocketFour);
}

//! CHALLENGE:
/*
    Add the following functionality: 
    -When we click the submit button, the fetchSpace function should be invoked.
    note: comment out the line where we invoke it ourselves: fetchSpace()
*/

// mine is first answer, second is his- i didnt do the event prevent default part at the top of fetspace function
document.querySelector('form').onclick = fetchSpace;
// searchForm.addEventListener('submit', fetchSpace);

// form default action is to refresh page when submitted

// challenge- add a button that, when clicked, creates a table with rocket info