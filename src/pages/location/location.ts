import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LocationInfo } from '../../models/location.interface';
import { GeoServiceProvider } from '../../providers/geo-service/geo-service';

@IonicPage({
  name: 'location'
})
@Component({
  selector: 'page-location',
  templateUrl: 'location.html',
})

export class LocationPage {

  locations: LocationInfo[];

  constructor(public navCtrl: NavController, private geoService: GeoServiceProvider,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.locations = [
      {name: "Cul de Sac", address: "Heuvel 13", zipcode: "5038 CN", city: "Tilburg"},
      {name: "'t Buitenbeentje", address: "Heuvel 7", zipcode: "5038 CN", city: "Tilburg"},
      {name: "Cafe Stoffel", address: "Heuvel 1", zipcode: "5038 CN", city: "Tilburg"},
      {name: "Studio Tilburg", address: "Heuvel 22", zipcode: "5038 CN", city: "Tilburg"},
      {name: "Cafe Weemoed", address: "Heuvel 19", zipcode: "5038 CN", city: "Tilburg"},
      {name: "Cafe Phillipe", address: "Heuvel 8", zipcode: "5038 CN", city: "Tilburg"},
      {name: "Cul de Sac", address: "Heuvel 4", zipcode: "5038 CN", city: "Tilburg"}
    ]

    this.getLocations();
  }

  getLocations() {
    let outcome: any; 
    this.geoService.fetchLocations()
      .then((positionError) => {
        outcome = positionError;
        console.log("Outcome " + outcome); 
      })
      .catch((err) => {
        outcome = err;
        console.log("ERROR " + JSON.stringify(outcome)); 
      })
  }

}
