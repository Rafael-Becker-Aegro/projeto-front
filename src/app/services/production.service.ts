import { Plot } from 'src/app/models/plot';
import { Production } from './../models/production';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductionService {

  private readonly apiUrl = 'api/v1/farms';

  constructor(private httpClient: HttpClient,) { }

  getAll(plot: Plot){
    console.log(`${this.apiUrl}/${plot.farm}/plots/${plot.id}/productions`);
    return this.httpClient.get<Production[]>(`${this.apiUrl}/${plot.farm}/plots/${plot.id}/productions`)
    .pipe(
      first(),
    );
  }

  create(plot: Plot, production: Production){
    return this.httpClient.post<Plot>(`${this.apiUrl}/${plot.farm}/plots/${plot.id}/productions`, production)
    .pipe(
      first(),
    );
  }

  update(plot: Plot, production: Production){
    return this.httpClient.put<Plot>(`${this.apiUrl}/${plot.farm}/plots/${plot.id}/productions/${production.id}`, production)
    .pipe(
      first(),
    );
  }

  delete(plot: Plot, productionId: string){
    return this.httpClient.delete(`${this.apiUrl}/${plot.farm}/plots/${plot.id}/productions/${productionId}`)
    .pipe(
      first(),
    );
  }
}
