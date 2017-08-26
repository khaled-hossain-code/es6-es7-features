import Animal from './AnimalClass'

class Lion extends Animal {
    constructor(name, height, color){
        super(name, height);
        this.color = color;
    }
    
    static roar (){
        console.log(`Lion Roar's`);
    }
    
    hello(){
        console.log(`Hello I am ${this.name} from Paradise kingdom`);
    }
}

export default Lion;