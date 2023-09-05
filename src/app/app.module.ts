import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { LoginComponent } from './login/login.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { OperationsComponent } from './operations/operations.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { AllOperationsComponent } from './all-operations/all-operations.component';
import { TextMaskModule } from 'angular2-text-mask';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [
    AppComponent,
    Devices,
    OperationsComponent,
    Categories,
    ConfirmModalComponent,
    LoginComponent,
    OperationsComponent,
    AllOperationsComponent,
  ],
  imports: [
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    BrowserModule,
    TextMaskModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatCardModule,
    MatIconModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
  ],
  entryComponents: [ConfirmModalComponent],
  providers: [ApiserviceService, BrowserModule, BsModalService],
  bootstrap: [AppComponent],
})
export class AppModule {}
