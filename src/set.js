let a = new Set();
let b = [1,2,3,4,5];

a.add(5);
a.add('hello');
a.add({name:'k', age:43});
a.add([1,2,3,4]);
console.log(a.size); // 4
console.log(a);
console.log(a.has(7)); //falsex

console.log(a.values());//returns a iterable object with set values
//iterator object can be iterate by for of loop
for (let element of a.values()){
    console.log(element);
}

//loop through array
for (let value in b) {
    console.log(value);
}