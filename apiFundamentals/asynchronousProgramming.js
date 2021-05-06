//                  1
function getData(callback) {
    // 2
    setTimeout(() => {
//      3
        callback('Some Data');
    }, 3000);
}
//          4
getData((data) => {
    console.log(data);
});

console.log('Hello world');

// 1 added parameter to getdata functions- going to expect callback funcrionwhen invoked
// 2 set the timeout method- this will wait the allotted milliseconds (3000) before executing the coode inside it
// 3 we grab the parametic- expecting a function to be invoked and send any data we receive "some data"
// 4 we invoke our getData function with an anonymous function as the argument- this anonymous function somply console logs the received data
