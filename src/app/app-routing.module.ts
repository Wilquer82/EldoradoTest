import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Categories } from './categories/categories.component';
import { Devices } from './devices/devices.component';

const routes: Routes = [
  { path: 'categories', component: Categories },
  { path: 'devices', component: Devices },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
