function callbackFunction(){
    const data = {
        name: 'Ralf Macho',
        age: 66,
        occupation: 'kickboxing'

    }
    return data;
}

function showGreeting(dataFromFunction){
    return 'Hello ' + dataFromFunction.name + ', I hear you\'re the great.';
}

console.log(showGreeting(callbackFunction()));

// try with a syncronous function that takes longer (for loop)

function callbackFunction2(){
    for  (let i = 0; i< 100; i++) {
        console.log(i);
    }
    const data = {
        name: 'Ralf Macho',
        age: 66,
        occupation: 'kickboxing'

    }
    return data;
}

function showGreeting(dataFromFunction){
    return 'Hello ' + dataFromFunction.name + ', I hear you\'re still the great.';
}

console.log(showGreeting(callbackFunction2()));

// when this happens, cant run the data part from the call back on line 36 until it has finished the for loop
// promises 
// boolean declaration
var amIGood = false;
// promise
var iCanHasGift = new Promise(
    function(resolve, reject) {
        if (amIGood) {
            var gift = {
                brand: 'Mattel',
                item: 'action-figure'
        };
            resolve(gift); //fulfilles
    } else {
        var naughty = "naughty- you get coal";
        reject(naughty); //rejected
    }
    }
);

// promise call
var checkTwice = function() {
    iCanHasGift
        .then(function (fulfilled) {
            // nice list-gift
            console.log(fulfilled);
            // output is the gift info- brand: mattel iutem 'action figure'
        })
        .catch(function (error) {
            // naught listy-coal
            console.log(error);
            // output "naughty-you get coal"
        });
};

checkTwice();

// chaining promises 4.03 async

// 2ns promise

var playDate = function(gift) {
    return new Promise(
        function (resolve, reject) {
            var message = "salutations, what do you think of my";
            resolve(message);
        }
    );
};

// promise call

var checkTwice = function () {
    console.log('before christmas'); //log before
    iCanHasGift
        .then(playDate)
        .then(function(fulfilled){
            console.log(fulfilled);
        })
        .catch(function(error){
            console.log(error);
        });
    console.log('after gitfts'); //log after
    
}
checkTwice();

// not working- got "naught you get coal" twice, not the salutations