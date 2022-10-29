import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Devices } from './devices/devices.component';
import { Categories } from './categories/categories.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { ApiserviceService } from './apiservice.service';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { AddModalComponent } from './add-modal/add-modal.component';



@NgModule({
  declarations: [
    AppComponent,
    Devices,
    Categories,
    ConfirmModalComponent,
    AddModalComponent,
  ],
  imports: [
  FormsModule,
    BrowserModule,
    HttpClientModule,
    MatButtonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
  ],
  entryComponents: [ConfirmModalComponent],
  providers: [ApiserviceService, BrowserModule, BsModalService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
