import { Injectable } from '@angular/core';
import { Farm } from 'src/app/models/farm';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FarmsService {

  private readonly apiUrl = 'api/v1/farms';

  constructor(private httpClient: HttpClient) { }

  getAll(){
    return this.httpClient.get<Farm[]>(this.apiUrl)
    .pipe(
      tap(farms => console.log(farms))
    );
    // return [
    //   {name: 'Farm1', id: '11', area: 111, productivity: 25},
    //   {name: 'Farm2', id: '22', area: 222, productivity: 25},
    //   {name: 'Farm3', id: '44', area: 332, productivity: 25},
    //   {name: 'Farm4', id: '33', area: 134, productivity: 25},
    //   {name: 'Farm5', id: '76', area: 112, productivity: 25},
    // ];
  }
}
