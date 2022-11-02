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

  // apiUrl = 'http://localhost:3001';
  // On AWS account
  apiUrl = "http://ec2-54-167-212-139.compute-1.amazonaws.com:3001"

  AddDevice(Device: any) {
    return this._http.post(`${this.apiUrl + "/addDevice"}`, Device);
  }

  Addcategory(Category: any) {
    return this._http.post(`${this.apiUrl + "/addCategory"}`, Category);
  }

  getAl1Categories():Observable<any>{
    return this._http.get(`${this.apiUrl+"/categories"}`);
  }

  getDevicesWithCategories(id: number): Observable<any>{
    return this._http.get(`${this.apiUrl+"/"+id}`);
  }

  deleteDevice(id: number): Observable<any>{
    return this._http.delete(`${this.apiUrl + "/delDevice/" + id}`)
  };

  deleteCategory(id: number): Observable<any>{
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
