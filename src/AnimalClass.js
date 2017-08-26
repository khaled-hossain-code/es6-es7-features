class Animal {
    constructor(name, height) {
        this.name = name;
        this.height = height;
    }

    hello(){
        console.log(`Hello I'm ${this.name} from Animal kingdom`);
    }
}

export default Animal;