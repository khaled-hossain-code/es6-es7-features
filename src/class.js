class Drone {
    constructor(id, name){
        this._id = id; //instacne variable
        this.name = name;
    }

    static getCompany(){ //static method
        console.log('Drone Company');
        console.log(this.id); //undefined
    }

    fly(){ //instance method
        console.log(`Drone ${this.id} is Flying`);
    }

    get id() { //getter of id
        return this._id;
    }

    set id(value) { //setter of id
        this._id = value;
    }
}

Drone.maxHeight = 2000; //this is a class property
console.log(Drone.maxHeight);//2000
console.log(Drone.getCompany());//Drone Company
console.log(Drone.brand);


let drone = new Drone('A123', 'Flyer');
console.log(drone.id); // A123
console.log(drone.name);// Flyer
console.log(drone.maxHeight);//undefined note:class property can not be accessed from instance
console.log(drone.fly()); // A123 is Flying
//console.log(drone.getCompany());// TypeError drone.getCoapny is not a function
console.log(drone.id);//this is a method but we can access it as property as it is getterd
drone.id = 22;
console.log(drone.id);
