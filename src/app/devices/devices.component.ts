import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';


export interface Devices{
  Id: number;
  Color: string;
  PartNumber: number;
  Category: string;
}

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class Devices implements OnInit {

  CategoryId: any;
  DeviceId: any;
  isSelected: boolean = false;

  constructor(private service: ApiserviceService) { }

  itens: any;
  categories: any;

  GetWithId() {
    console.log(this.CategoryId)
    this.service.getDevicesWithCategories(this.CategoryId).subscribe((res) => {
      this.itens = res;
      console.log(res);
      this.isSelected = true;
    });
  }

  deleteItem(DeviceId: any) {
    this.service.showConfirm('Confirmação de Exclusão', 'Are you sure you want to delete?')
  }

  ngOnInit(): void {
    this.service.getAl1Categories().subscribe((res) => {
      this.categories = res;
      console.log(this.categories);
    })
    // console.log(this.CategoryId);



  }

}
