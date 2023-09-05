import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Categories } from './categories/categories.component';
import { Devices } from './devices/devices.component';
import { OperationsComponent } from './operations/operations.component';

const routes: Routes = [
  { path: 'categories', component: Categories },
  { path: 'devices', component: Devices },
  { path: 'operations', component: OperationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
