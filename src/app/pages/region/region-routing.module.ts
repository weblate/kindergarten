import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegionComponent} from './region.component';
import {RegionListComponent} from "./region-list/region-list.component";
import {RegionViewComponent} from "./region-view/region-view.component";
import {RegionEditComponent} from "./region-edit/region-edit.component";
import {AUTH_CAN_ACTIVATE} from "../../data/auth/auth.guard";

const routes: Routes = [{
  path: '', component: RegionComponent, children: [
    {path: '', component: RegionListComponent},
    {path: ':id', component: RegionViewComponent},
    {path: ':id/edit', component: RegionEditComponent, canActivate: [AUTH_CAN_ACTIVATE]},
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegionRoutingModule {
}
