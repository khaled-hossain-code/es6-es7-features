async function one() {
    return 'one';
}

one().then( val1 => console.log(val1) );

async function two() {
    return 'two';
}

two().then( val2 => console.log(val2) )
     .catch( err => console.log(err) );

async function combo() {
    let valueOfOne = await one();
    let valueOfTwo = await two();
    console.log(`Combo: ${valueOfOne},${valueOfTwo}`);
}

combo();

async function parallel() {
    let [valueOfOne,valueOfTwo] = await Promise.all([one(),two()]);
    console.log(`Parallel: ${valueOfOne}, ${valueOfTwo}`);
}

parallel();




