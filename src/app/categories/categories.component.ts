import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';

export interface Categories{
  Id: number;
  Category: string;
}

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class Categories implements OnInit {

  CategoryId: any;
  ShowTable: boolean = false;


  constructor(private service: ApiserviceService) { }

  Categories: any;


  Table() {
    this.ShowTable = true;
  }

  deleteItem(DeviceId: any) {
    this.service.showConfirm('Confirmação de Exclusão', 'Are you sure you want to delete?')
  }

  ngOnInit(): void {
    this.service.getAl1Categories().subscribe((res) => {
      this.Categories = res;
      console.log(this.Categories);
    })
  }

}

