function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

        if(true) {
            resolve('some data');
        } else {
            reject('error');
        }
        }, 3000);
    })
}

getData()
    .then( data => console.log(data))
    .catch( error => console.log(error))

// console.log(data);