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




  ngOnInit(): void { }

  NewCategory = new FormGroup({
    'Category': new FormControl('', Validators.required)
  });

  onClose() {
    this.addCategory = false;
    this.BsModalRef.hide();

  }





}

