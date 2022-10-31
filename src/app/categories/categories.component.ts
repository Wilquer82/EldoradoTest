import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class Categories implements OnInit {

  ShowTable: boolean = false;
  ShowAddCategory: boolean = false;


  constructor(
    private service: ApiserviceService,
    public BsModalRef: BsModalRef) { }

  Categories: any;
  addCategory: boolean = false;


  Table() {
    this.service.getAl1Categories().subscribe((res) => {
      this.Categories = res;
    })
    this.ShowTable = true;
    this.addCategory = false;
  }

  deleteItem(Id: any) {
    this.service.showConfirm('Category', Id, 'Confirmação de Exclusão', `Você confima a exclusão da Categoria Id ${Id} ?`)
    this.ShowTable = false;
  }

  AddCategory() {
    this.addCategory = true;
    this.ShowTable = false;
  }

  ngOnInit(): void { }

  NewCategory = new FormGroup({
    'Category': new FormControl('', Validators.required)
  });

  onClose() {
    this.addCategory = false;
    this.BsModalRef.hide();

  }

  Submit(Category: any) {
    if (this.NewCategory.valid){
      this.service.Addcategory(Category.value).subscribe((res) => {
      })
      this.NewCategory.reset();
      this.addCategory = false;
    }
    else {
      alert("Campos em Branco! Corrija!")
    }

  }

}

