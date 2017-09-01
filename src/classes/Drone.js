import Vehicle from './Vehicle'

class Drone extends Vehicle {
    constructor(license, model, latLong){
        super(license, model, latLong);
        this.airTimeHours = null;
        this.base = null;        
    }

}

export default Drone;