import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {StationIconComponent} from "./icons/station-icon/station-icon.component";
import {UserIconComponent} from "./icons/user-icon/user-icon.component";
import {ProfileIconComponent} from "./icons/profile-icon/profile-icon.component";
import { StatisticCardComponent } from './ui/statistic-card/statistic-card.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StationIconComponent,
    UserIconComponent,
    ProfileIconComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
