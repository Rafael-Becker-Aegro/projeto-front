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
  }
}
