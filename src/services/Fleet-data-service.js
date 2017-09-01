import Drone from '../classes/Drone'
import Car from '../classes/Car'
import DataError from '../classes/DataError'

class FleetDataService {
    constructor(){
        this.cars = []; //this will store instances of car object
        this.drones = []; //instances of drone object
        this.errors = [];
    }

    loadData(data) {
        let cars = data.filter( (value,index,array) =>  value.type === 'car');
        let drones = data.filter( (value,index,array) =>  value.type === 'drone');

        this.cars = cars.map( (value, index, array) => {
            let car = new Car(value.license, value.model, value.latLong);
            car.make = value.make;
            car.miles = value.miles;
            return car;
        })

        this.drones = drones.map( (value, index, array) => {
            let drone = new Drone(value.license, value.model, value.latLong);
            drone.base = value.base;
            drone.airTimeHours = value.airTimeHours;
            return drone;
        })

    }

    validateCar( car ) {

    }

    validateDrone( drone ) {

    }
}

export default FleetDataService;