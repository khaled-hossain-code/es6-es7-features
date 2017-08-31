//This is a abstract class as other class will inherit from it but it will not have its own instance
class Vehicle {
    constructor(licNum) {
        this.licenseNum = licNum;
        this.gpsEnabled = true;
    }

    static getCompanyName() { //this static method is accessable by Vehicle class or any class extends it
        console.log('Toshiba');//no instane of any class can access it
    }

    start() {
        console.log('Starting Vehicle');
    }
}

export default Vehicle;