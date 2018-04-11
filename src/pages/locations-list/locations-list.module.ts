import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LocationsListPage } from './locations-list';
import { GeoServiceProvider } from '../../providers/geo-service/geo-service';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder } from '@ionic-native/native-geocoder';

@NgModule({
  declarations: [
    LocationsListPage
  ],
  imports: [
    IonicPageModule.forChild(LocationsListPage),
  ],
  exports: [
    LocationsListPage
  ],
  providers: [
    Geolocation,
    AuthServiceProvider,
    GeoServiceProvider,
    NativeGeocoder
  ]
})
export class LocationsListPageModule {}
