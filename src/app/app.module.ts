import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DevicesComponent } from './devices/devices.component';
import { CategoriesComponent } from './categories/categories.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { ApiserviceService } from './apiservice.service';

@NgModule({
  declarations: [
    AppComponent,
    DevicesComponent,
    CategoriesComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    MatButtonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatTableModule
  ],
  providers: [ApiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
