import { Farm } from 'src/app/models/farm';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-plot-list',
  templateUrl: './plot-list.component.html',
  styleUrls: ['./plot-list.component.css']
})
export class PlotListComponent implements OnInit {
  farm!: Farm;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.farm = this.route.snapshot.params['farm'];
  }

}
