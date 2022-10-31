import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ApiserviceService } from '../apiservice.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class Devices implements OnInit {

  CategoryId: any;
  ShowTable: boolean = false;


  constructor(
    private service: ApiserviceService,
    public BsModalRef: BsModalRef) { }

  itens: any;
  categories: any;
  AddDevice: boolean = false;

  GetWithId() {
    this.service.getDevicesWithCategories(this.CategoryId).subscribe((res) => {
      this.itens = res;
      this.ShowTable = true;
      this.AddDevice = false;
    });
  }

  deleteItem(Id: any) {
    this.service.showConfirm('Device', Id, 'Confirmação de Exclusão', `Você confima a exclusão do Dispositivo Id ${Id} ?`)
    this.ShowTable = false;
  }

  addItem() {
    this.AddDevice = true;
    this.ShowTable = false;
  }

  onClose() {
    this.AddDevice = false;
  }

  ngOnInit(): void {
    this.service.getAl1Categories().subscribe((res) => {
      this.categories = res;
    })
  }

  Device = new FormGroup({
    'CategoryId': new FormControl('', Validators.required),
    'Color': new FormControl('', Validators.required),
    'PartNumber': new FormControl('', Validators.required),
  });

  Submit(Device: any) {
      if (this.Device.valid){
        this.service.AddDevice(Device.value).subscribe((res) => {
        })

        this.Device.reset();
        this.AddDevice = false;
    }
    else {
      alert("Campos em Branco ou Incorretos! Corrija!")
    }
  }

}
