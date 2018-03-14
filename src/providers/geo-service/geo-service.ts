import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';

@Injectable()
export class GeoServiceProvider {

  _API_KEY: string = '&key=AIzaSyCZpp6dL7hmbmJfxqPOqve7wTYgu1QglAw';
  _BASE: string = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?'
  _LOCATION: string = 'location='; 
  _RADIUS: string = '&radius=1500';
  _TYPE: string = '&type=cafe';
  

  constructor(public http: HttpClient, private geo: Geolocation) { }


  fetchLocations() {
    return this.geo.getCurrentPosition()
      .then((response) => {
          // latitutude + longtitude 
          let lat = response.coords.latitude;
          let long = response.coords.longitude; 
  
          // invoke another function that will call Google API
          this.getGoogleLocations(lat, long); 
      })
      .catch((err) => {
        let positionError = err.message; 
        console.log("ERROR IN SERVICE " + err.message); 
        return positionError; 
      })
  }

  getGoogleLocations(lat, long) {
    //let endPoint = this._BASE + this._LOCATION + lat + ',' + long + '&radius=5000&type=cafe' + this._API_KEY;
    
    let endPoint = this._BASE + this._LOCATION + lat + ',' 
    + long + this._RADIUS + this._TYPE + this._API_KEY;

    let headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json');
      headers.append('Accept', 'application/json');

    this.http.get(endPoint, {
      headers: headers
    }).subscribe(data => {
        console.log(JSON.stringify(data)); 
      })
  }



}