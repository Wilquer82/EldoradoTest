import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';


// interface Category {
//   Category: string;
//   Id: number;
// }

// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

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
export class DevicesComponent implements OnInit {

  CategoryId: any;
  DeviceId: any;


  constructor(private service: ApiserviceService) { }

  itens: any;
  categories: any;

  GetWithId() {
    console.log(this.CategoryId)
    this.service.getDevicesWithCategories(this.CategoryId).subscribe((res) => {
      this.itens = res;
      console.log(res);
    });
  }

  deleteItem(DeviceId: any) {
    // this.service.deleteDevice(DeviceId).subscribe((res) => {
    //   console.log(res);
    // }
  }

  ngOnInit(): void {
    this.service.getAl1Categories().subscribe((res) => {
      this.categories = res;
      console.log(this.categories);
    })
    // console.log(this.CategoryId);



  }

}
