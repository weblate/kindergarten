import {Component} from '@angular/core';
import {map, share, switchMap} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {RegionService} from "../../../data/region/region.service";

@Component({
  selector: 'app-region-reporting-point-view',
  templateUrl: './region-reporting-point-view.component.html',
  styleUrls: ['./region-reporting-point-view.component.scss']
})
export class RegionReportingPointViewComponent {

  private readonly params = this.route.params.pipe(map(({id, rid}) => ({id, rid})));

  protected reportingPoint = this.params.pipe(
    switchMap(({id, rid}) => this.regionService.getReportingPoint(id, rid)),
    share(),
  );

  protected readonly reportingPointCoordinates = this.reportingPoint.pipe(
    map(points => points.map(point => ([point.lon, point.lat])))
  );

  constructor(
    private readonly route: ActivatedRoute,
    private readonly regionService: RegionService,
  ) {
  }
}