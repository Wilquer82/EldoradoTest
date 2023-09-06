import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from './../apiservice.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-all-operations',
  templateUrl: './all-operations.component.html',
  styleUrls: ['./all-operations.component.css']
})
export class AllOperationsComponent implements OnInit {

  @Input() operation: any;
  @Input() amount: any;
  @Input() date: string = '';
  @Input() cancelB = 'Cancelar';
  @Input() confirmB = 'Confirmar';

  balance: number = 0;
  user: any;


  Operation = new FormGroup({
    'operation': new FormControl('', Validators.required),
    'amount': new FormControl('', Validators.required),
    'date': new FormControl('', Validators.required),
    'banco': new FormControl('', [Validators.required, Validators.pattern(/^\d+$/), Validators.maxLength(3)]),
    'ag': new FormControl('', [Validators.required, Validators.pattern(/^\d+$/), Validators.maxLength(4)]),
    'agdg': new FormControl('', [Validators.required, Validators.pattern(/^\d+$/), Validators.maxLength(1)]),
    'conta': new FormControl('', [Validators.required, Validators.pattern(/^\d+$/), Validators.maxLength(8)]),
    'contadg': new FormControl('', [Validators.required, Validators.pattern(/^\d+$/), Validators.maxLength(1)]),
    'pix': new FormControl('', [Validators.required]),
    'opção': new FormControl('', [Validators.required]),
  });

  constructor(private location: Location,
              private service: ApiserviceService,
) { }

  ngOnInit(): void {
    this.user = localStorage.getItem('user');
    this.service.getBalance(this.user).subscribe((res) => {
      this.balance = res.balance;
    });
  }

  goBack() {
    this.location.back();
  }


  Submit(Operation: any) {
    console.log(this.amount, this.balance);
    if(this.amount > this.balance) {
      alert("Operação não pode ser realizada, saldo Insuficiente!")
      return
    }
    Operation.operation = this.operation;
}


}
