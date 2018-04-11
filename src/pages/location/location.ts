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


  constructor(public navCtrl: NavController, private geoService: GeoServiceProvider,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log("Location page!");
  }

}
