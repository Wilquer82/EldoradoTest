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
  @Input() amount: number = 0;
  @Input() date: string = '';
  @Input() cancelB = 'Cancelar';
  @Input() confirmB = 'Confirmar';

  Operation = new FormGroup({
    'operation': new FormControl('', Validators.required),
    'amount': new FormControl('', Validators.required),
    'date': new FormControl('', Validators.required),
  });

  constructor(private location: Location) {}

  ngOnInit(): void {}

goBack() {
  this.location.back();
}

Submit(operation: any) {
    //   if (this.Device.valid){
    //     this.service.AddDevice(Device.value).subscribe((res) => {
    //     })

    //     this.Device.reset();
    //     this.AddDevice = false;
    // }
    // else {
    //   alert("Campos em Branco ou Incorretos! Corrija!")
    // }
}


}
