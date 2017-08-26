let p1 = new Promise( (resolve,reject) => {
    resolve('value1');
});

let p2 = new Promise( (resolve, reject) => {
    reject('error in p2');
});

let p3 = new Promise( (resolve,reject) => {
    resolve('value3');
});


p1.then( (val1) => {
    console.log(val1); //value1
    return p2;
}).then( (val2) => {
    console.log(val2);
    return p3;
}).then( (val3) => {
    console.log(val3);
}).catch( (err) => {
    console.log(err); //error in p2
})
