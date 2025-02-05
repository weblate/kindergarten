import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MapRoutingModule} from './map-routing.module';
import {MapComponent} from './map.component';
import {MapWindshieldComponent} from './map-windshield/map-windshield.component';
import {MapVehicleInfoComponent} from './map-vehicle-info/map-vehicle-info.component';


@NgModule({
  declarations: [
    MapComponent,
    MapWindshieldComponent,
    MapVehicleInfoComponent
  ],
  imports: [
    CommonModule,
    MapRoutingModule
  ]
})
export class MapModule {
}
