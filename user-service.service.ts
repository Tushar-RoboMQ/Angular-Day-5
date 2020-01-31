import { HttpClientModule, HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable, throwError as observableThrowError } from 'rxjs';
import { Iuser } from './user';
import { tap, catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

private _url : string = 'http://localhost:3000/user';

  constructor(private http: HttpClient) { }
    getEmployees(): Observable<Iuser[]>{
    return this.http.get<Iuser[]>(this._url + '/get-all-user')
    .pipe(tap(data => console.log(JSON.stringify(data))), catchError(this.errorHandler));
    }


  // getEmployee(id:number): Observable<Iuser>{
  //   return this.http.get<Iuser>(this._url, {params: new HttpParams().set('id', id.toString())})
  //   .pipe(tap(data => console.log(JSON.stringify(data))), catchError(this.errorHandler));
  // }



  errorHandler(error: HttpErrorResponse){
  return observableThrowError(error.message || 'Server eroor');
}

private extractData(res: Response) {
  let body = res.json();
      return body;
  }
  private handleError(error: Response | any) {
  console.error(error.message || error);
  return Observable.throw(error.status);
  }
}
