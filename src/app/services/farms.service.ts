import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first } from 'rxjs/operators';
import { Farm } from 'src/app/models/farm';

@Injectable({
  providedIn: 'root'
})
export class FarmsService {

  private readonly apiUrl = 'api/v1/farms';

  constructor(private httpClient: HttpClient) { }

  getAll(){
    return this.httpClient.get<Farm[]>(this.apiUrl)
    .pipe(
      first(),
    );
  }

  create(farm: Farm){
    return this.httpClient.post<Farm>(this.apiUrl, farm)
    .pipe(
      first(),
    );
  }

  update(farm: Farm){
    return this.httpClient.put<Farm>(`${this.apiUrl}/${farm.id}`, farm)
    .pipe(
      first(),
    );
  }

  delete(farmId: string){
    return this.httpClient.delete(`${this.apiUrl}/${farmId}`)
    .pipe(
      first(),
    );
  }

  getProductivity(farmId: string){
    return this.httpClient.get<number>(`${this.apiUrl}/${farmId}/get_productivity`)
    .pipe(
      first(),
    )
  }
}
