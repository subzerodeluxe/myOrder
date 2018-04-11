import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { LocationInfo } from '../../models/location.interface';
import { GeoServiceProvider } from '../../providers/geo-service/geo-service';
import { NativeGeocoder, NativeGeocoderReverseResult } from '@ionic-native/native-geocoder';

@IonicPage({
  name: 'locationsList'
})
@Component({
  selector: 'page-locations-list',
  templateUrl: 'locations-list.html',
})
export class LocationsListPage {

  positionError: string; 
  error: any; 
  result: any; 
  locations: LocationInfo[];

  constructor(public navCtrl: NavController, public loading: LoadingController, private geoService: GeoServiceProvider,
    public nativeGeocoder: NativeGeocoder, public navParams: NavParams) {
  }
  
  refreshLocation() {
    this.geoService.getCurrentUserLocation()
      .then((response) => {
        this.result = response.coords.latitude;
        const long = response.coords.longitude; 
        
        // // now we want to make a call to native geocoder to get an address and city 
        // this.nativeGeocoder.reverseGeocode(lat, long)
        //   .then((result: NativeGeocoderReverseResult) => this.result = result.countryName)
        //   .catch((error: any) => this.error = error);
      })
      .catch((err) => {
        this.positionError = err.message; 
      })
  }
  
  ionViewDidLoad() {

    this.geoService.getCurrentUserLocation()
      .then((response) => {
        this.result = response.coords.latitude;
        const long = response.coords.longitude; 
        
        // // now we want to make a call to native geocoder to get an address and city 
        // this.nativeGeocoder.reverseGeocode(lat, long)
        //   .then((result: NativeGeocoderReverseResult) => this.result = result.countryName)
        //   .catch((error: any) => this.error = error);
      })
      .catch((err) => {
        this.positionError = err.message; 
      })


    // this.loader = this.loading.create({
    //   content: 'Getting bars and restaurants...',
    // });
    // // this.locations = [
    // //   {name: "Cul de Sac", address: "Heuvel 13", zipcode: "5038 CN", city: "Tilburg"},
    // //   {name: "'t Buitenbeentje", address: "Heuvel 7", zipcode: "5038 CN", city: "Tilburg"},
    // //   {name: "Cafe Stoffel", address: "Heuvel 1", zipcode: "5038 CN", city: "Tilburg"},
    // //   {name: "Studio Tilburg", address: "Heuvel 22", zipcode: "5038 CN", city: "Tilburg"},
    // //   {name: "Cafe Weemoed", address: "Heuvel 19", zipcode: "5038 CN", city: "Tilburg"},
    // //   {name: "Cafe Phillipe", address: "Heuvel 8", zipcode: "5038 CN", city: "Tilburg"},
    // //   {name: "Cul de Sac", address: "Heuvel 4", zipcode: "5038 CN", city: "Tilburg"}
    // // ]

    // this.getLocations();
  }

  getLocations() {
 


    //let outcome: any; 
    // this.geoService.fetchLocations()
    //   .then((positionError) => {
    //     outcome = positionError;
    //     console.log("Outcome " + JSON.stringify(outcome)); 
    //   })
    //   .catch((err) => {
    //     outcome = err;
    //     console.log("ERROR " + JSON.stringify(outcome)); 
    //   })
  }

}
