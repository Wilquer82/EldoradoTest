import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.css']
})
export class ConfirmModalComponent implements OnInit {

  @Input() title = 'Titulo';
  @Input() msg = 'Conteúdo';
  @Input() cancelB = 'Cancelar';
  @Input() confirmB = 'Confirmar';

  constructor(public BsModalRef: BsModalRef) { }

  ngOnInit(): void {
  }

  onClose() {
    this.BsModalRef.hide();
  }
  onConfirm() {

  }

}
