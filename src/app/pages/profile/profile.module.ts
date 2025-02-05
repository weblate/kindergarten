import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfileRoutingModule} from './profile-routing.module';
import {ProfileComponent} from './profile.component';
import {ProfileIconComponent} from "../../core/icons/profile-icon/profile-icon.component";
import {ButtonComponent} from "../../core/components/button/button.component";

@NgModule({
  declarations: [
    ProfileComponent
  ],
  exports: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    ProfileIconComponent,
    ButtonComponent
  ]
})
export class ProfileModule {
}
