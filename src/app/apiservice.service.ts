import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';

@Injectable({
  providedIn: 'root'
})

export class ApiserviceService {
  constructor(
    private _http: HttpClient,
    private modalService: BsModalService,
  ) { }

  apiUrl = 'http://localhost:3001';

  // apiUrl = "https://ec2-44-210-0-1.compute-1.amazonaws.com:3001"

  AddUser(User: any) {
    console.log("service", User)
    return this._http.post(`${this.apiUrl + "/user"}`, User);
  }

  Login(data: any) {
        return this._http.post(`${this.apiUrl + "/login"}`, data);
  }

  getBalance(user: string):Observable<any>{
    return this._http.get(`${this.apiUrl+"/balance/"+user}`);
  }

  putBalance(id: number): Observable<any>{
    return this._http.get(`${this.apiUrl+"/"+id}`);
  }

  getMoviments(id: number): Observable<any>{
    return this._http.delete(`${this.apiUrl + "/delDevice/" + id}`)
  };

  getCartMov(id: number): Observable<any>{
    return this._http.delete(`${this.apiUrl + "/delCategory/" + id}`)
  };

  showConfirm(Type: string, Id: number, title: string, msg: string, confirmB?: string, cancelB?: string) {
    const bsModalRef: BsModalRef = this.modalService.show(ConfirmModalComponent);
    bsModalRef.content.title = title;
    bsModalRef.content.msg = msg;
    bsModalRef.content.Type = Type;
    bsModalRef.content.Id = Id;

    if (confirmB) {
      bsModalRef.content.confirmB = confirmB;
    }
    if (cancelB) {
      bsModalRef.content.cancelB = cancelB;
    }
  }

}
