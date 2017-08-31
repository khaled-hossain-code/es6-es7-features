import Vehicle from './Vehicle'

class Drone extends Vehicle {
    constructor(licNum) {
        super(licNum); //super or initialization of parent class has to be the first line of constructor
    }

    static getCompanyName() { //overriding static method of base class
        super.getCompanyName(); //toshiba
        console.log('Droid Drone');
    }

    start() { //this method is overriding base class start() method
        super.start();//we can call super class method and add more functionality into that in our method
        console.log('Starting Drone');
    }

}

export default Drone;