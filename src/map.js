let myMap = new Map();

let key1 = "string key";
let key2 = {a: 'key'};
let key3 = function(){};

myMap.set(key1,"return value for string");
myMap.set(key2,"return value for object");
myMap.set(key3,"return value for function");
console.log(myMap);

//array of key value pair can be converted into Map
let myArr = [['one',1],['two',2],['three',3]];
let myArrMap = new Map(myArr);
console.log(myArrMap);

//iterate through map
for( let [key,value] of myArrMap) {
    console.log(`${key} points to ${value}`);
}

console.log(myArrMap.has('one')); //find a key exists. true
myArrMap.get('one');//returns the value of key one
myArrMap.set('one', 10); //sets the value with the key