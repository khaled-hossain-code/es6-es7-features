import Vehicle from './Vehicle'

class Car extends Vehicle {
    constructor(license, model, latLong){
        super(license, model, latLong);
        this.make = null;
        this.miles = null;
    }
    
}

export default Car;