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

  getAl1Categories():Observable<any>
  {
    return this._http.get(`${this.apiUrl+"/categories"}`);
  }
  getDevicesWithCategories(id: number): Observable<any>{
    return this._http.get(`${this.apiUrl+"/"+id}`);
  }

  showConfirm(title: string, msg: string, confirmB?: string, cancelB?: string) {
    const bsModalRef: BsModalRef = this.modalService.show(ConfirmModalComponent);
    bsModalRef.content.title = title;
    bsModalRef.content.msg = msg;

    if (confirmB) {
      bsModalRef.content.confirmB = confirmB;
    }
    if (cancelB) {
      bsModalRef.content.cancelB = cancelB;
    }
  }
}
