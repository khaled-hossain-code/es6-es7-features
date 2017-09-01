import Car from './classes/Car';
import Drone from './classes/Drone';
import fleet from './data/fleet-data';
import FleetDataService from './services/Fleet-data-service'


let dataService = new FleetDataService();

dataService.loadData(fleet);
