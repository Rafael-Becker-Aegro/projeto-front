import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(private _snackBar: MatSnackBar) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
    .pipe(
      catchError((error: HttpErrorResponse) => {
        if(error.error.message == null){
          this.openSnackBar('Unexpected Error');
        }
        else{
          this.openSnackBar(error.error.message);
        }
        return throwError(error.error);
      })
    );
  }

  openSnackBar(message: string){
    this._snackBar.open(message, 'Close', {verticalPosition: 'top'});
  }
}

