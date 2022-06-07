import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first } from 'rxjs/operators';
import { Farm } from 'src/app/models/farm';

import { Plot } from './../models/plot';

@Injectable({
  providedIn: 'root'
})
export class PlotsService {

  private readonly apiUrl = 'api/v1/farms';

  constructor(private httpClient: HttpClient,) { }

  getAll(farmId: string){
    return this.httpClient.get<Plot[]>(`${this.apiUrl}/${farmId}/plots`)
    .pipe(
      first(),
    );
  }

  create(farmId: string, plot: Plot){
    return this.httpClient.post<Plot>(`${this.apiUrl}/${farmId}/plots`, plot)
    .pipe(
      first(),
    );
  }

  update(farmId: string, plot: Plot){
    return this.httpClient.put<Plot>(`${this.apiUrl}/${farmId}/plots/${plot.id}`, plot)
    .pipe(
      first(),
    );
  }

  delete(farmId: string, plotId: string){
    return this.httpClient.delete(`${this.apiUrl}/${farmId}/plots/${plotId}`)
    .pipe(
      first(),
    );
  }
}
