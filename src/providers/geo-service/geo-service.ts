import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';

@Injectable()
export class GeoServiceProvider {

  _API_KEY: string = '&key=AIzaSyCZpp6dL7hmbmJfxqPOqve7wTYgu1QglAw';
  _BASE: string = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?'
  _LOCATION: string = 'location='; 
  _RADIUS: string = '&radius=2500';
  _TYPE: string = '&type=bar&type=cafe&type=bar&type=night_club&type=establishment';
  

  constructor(public http: HttpClient, private geo: Geolocation) { }


  fetchLocations() {


     // invoke another function that will call Google API
     
     
     ///this.getGoogleLocations(lat, long); 
  }

  getGoogleLocations(lat, long) {
    //let endPoint = this._BASE + this._LOCATION + lat + ',' + long + '&radius=5000&type=cafe' + this._API_KEY;
    
    let endPoint = this._BASE + this._LOCATION + lat + ',' + long + this._RADIUS + this._TYPE + this._API_KEY;

    let headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json');
      headers.append('Accept', 'application/json');

    return this.http.get(endPoint, { headers: headers})  
      .subscribe(data => {
        return data; 
      })
  }

  getCurrentUserLocation(): Promise<any> {
    return this.geo.getCurrentPosition(); 
  }

}