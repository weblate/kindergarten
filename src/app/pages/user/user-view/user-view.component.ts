import {Component} from '@angular/core';
import {map, share, switchMap} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../../data/user/user.service";

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent {

  protected readonly user = this.route.params.pipe(
    map(({id}) => id),
    switchMap(id => this.userService.findById(id)),
    share(),
  );

  constructor(
    private readonly route: ActivatedRoute,
    private readonly userService: UserService
  ) {
  }
}