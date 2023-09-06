import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ApiserviceService } from '../apiservice.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as bcrypt from 'bcryptjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(
    private service: ApiserviceService,
    public BsModalRef: BsModalRef) { }

  isValid: boolean = false;

  @Output() LoginValid = new EventEmitter<boolean>;

  Login = new FormGroup({
    'doc_type': new FormControl('', Validators.required),
    'doc_num': new FormControl('', Validators.required),
    'pass': new FormControl('', Validators.required),
  });


  SignIn = new FormGroup({
    'user': new FormControl('', Validators.required),
    'doc_type': new FormControl('', Validators.required),
    'doc_num': new FormControl('', Validators.required),
    'pass': new FormControl('', Validators.required),
    'balance': new FormControl(0, Validators.required),
  })



  Submit(Login: any) {
    this.service.Login(Login.value).subscribe((res) => {
        const user = res.toString();
      if (user.length>1) {
        this.LoginValid.emit(true);
        localStorage.setItem('doc_type', Login.value.doc_type);
        localStorage.setItem('doc_num', Login.value.doc_num);
        localStorage.setItem('user', user );
        alert("Login");
      } else {
        alert("Campos em Branco ou Incorretos!")
      }
    })
  }

  AddUser(SignIn: any) {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(SignIn.value.pass, salt);
    SignIn.value.pass = hash;
    this.service.AddUser(SignIn.value).subscribe((res) => {
      console.log(res);
    })
  }

  ngOnInit(): void {
  }

  Register() {
    this.isValid = true;
  }

}
