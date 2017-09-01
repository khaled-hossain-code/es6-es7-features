//This is a abstract class as other class will inherit from it but it will not have its own instance
class Vehicle {
    constructor(license, model, latLong) {
        this.license = license;
        this.model = model;
        this.latLong = latLong;
    }
}

export default Vehicle;