import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private _HttpClient: HttpClient) { }
  getCars(): Observable<any> {
    return this._HttpClient.get('https://myfakeapi.com/api/cars')
  }
  getCarsById(id:number): Observable<any> {
    return this._HttpClient.get(`https://myfakeapi.com/api/cars/${id}`);
  }
}
