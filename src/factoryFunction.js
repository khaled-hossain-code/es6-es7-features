let add_prefix = (x) => {
    let concat = (y) => {
        return x + y;
    }
    return concat;
}

let add_prefix1 = (x) => {
    return (y) => {
        return x + y;
    }
}

let add_prefix2 = (x) => {
    return (y) => x + y
}

let add_prefix3 = x => y => x + y;


let hope = add_prefix('hope');
let full = hope('full');
console.log(full);// hopefull
let less = hope('less');
console.log(less);//hopeless

console.log( add_prefix('hope')('full')); // hopefull
console.log(add_prefix1('hope')('less'));//hopeless
console.log(add_prefix2('hip')('hop'));
console.log(add_prefix3('fruit')('full'));

