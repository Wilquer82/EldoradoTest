import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private _http: HttpClient) { }
  apiUrl = 'http://localhost:3001';

  getAl1Categories():Observable<any>
  {
    return this._http.get(`${this.apiUrl+"/categories"}`);
  }
  getDevicesWithCategories(id: any): Observable<any>{
    return this._http.get(`${this.apiUrl+"/"+id}`);
  }
}
