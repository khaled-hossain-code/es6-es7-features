import Vehicle from './Vehicle'

class Car extends Vehicle {
    constructor(licNum){
        super(licNum);
        this.gpsEnabled = false; //here we are overriding a property of base class
    }
}

export default Car;