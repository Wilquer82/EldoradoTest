import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ApiserviceService } from '../apiservice.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private service: ApiserviceService,
    public BsModalRef: BsModalRef) { }

  @Output() isValid: boolean = false;
  @Output() LoginValid = new EventEmitter<boolean>;

    Login = new FormGroup({
    'DocType': new FormControl('', Validators.required),
    'DocNum': new FormControl('', Validators.required),
    'Pass': new FormControl('', Validators.required),
    });

  Submit(Login: any) {
    this.LoginValid.emit(true)

      // if (this.Login.valid) {
        alert( "Login" );
        // this.isValid = true;
        // this.service.AddLogin(Login.value).subscribe((res) => {
        // })

        // this.Login.reset();
        // this.AddLogin = false;
    // }
    // else {
    //   alert("Campos em Branco ou Incorretos! Corrija!")
    // }
  }

  ngOnInit(): void {
  }

}
