import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css']
})
export class OperationsComponent implements OnInit {

    constructor(
      private ApiserviceService: ApiserviceService) {
  }


  ngOnInit(): void {}
  operation: string = '';

  Op(op: string) {
    this.operation = op;
  }
    // this.service.showConfirm('Saque', Id, 'Agendamento de Saque', `Confirma o Agendamento de saque no valor de ${Id} para 00/00/0000 as 00:00hs ?`)

}
