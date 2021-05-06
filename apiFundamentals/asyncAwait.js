// aync functions can be thought iof as an alternate way if writing promse based code
// intriduced in es2017
// avoid chaining promises
// allows us to program aync requests in a "synchronous" mann
// synchronoous code is executed in sequence, each statement waits for the previous status ti fuinish before executing
// helps keep our site or app responsive, reducing wait time for the users
// new keywords: -aync -await


async function myFn() {
    // await...
}

const myFn = async () => {
    // await...
}

const myFn = () => {
    // await... syntax error sunce thius function is not declared an async function
}

// async functions are normal js functions with one key difference- they always return a promise

async function fn() {
    return 'hello';
}
fn().then(console.log);
fn().then( data => {
    console.log(data);
})

// fn returns a resolved promise of hello
// the return value of hello is wrapped in a promise vua the promise construcro. the body of an async fucntion is always wrappe din a new promise

function fnAgain() {
    reutrn Promise.resolve('Hello');
}

fnAgain().then(console.log);

async function foo() {
    throw Error('this is a mistake');
}