import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ApiserviceService } from '../apiservice.service';
@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.css']
})
export class ConfirmModalComponent implements OnInit {

  @Input() Type = ''
  @Input() Id!: number;
  @Input() title = 'Titulo';
  @Input() msg = 'Conteúdo';
  @Input() cancelB = 'Cancelar';
  @Input() confirmB = 'Confirmar';

  constructor(private service: ApiserviceService,
    public BsModalRef: BsModalRef) { }

  ngOnInit(): void {
  }

  onClose() {
    this.BsModalRef.hide();
  }
  onConfirm() {
    if (this.Type = 'Device') {
      this.service.deleteDevice(this.Id).subscribe((res) => {
      })
      this.BsModalRef.hide();
    }
    if (this.Type = 'Category') {
      this.service.deleteCategory(this.Id).subscribe((res) => {
      })
      this.BsModalRef.hide();
    }
  }

}
