import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'TechForb-Test';
  showHeader= false;
  devices = false;
  categories = false;
  operations = false;

  DevicesComponent(){
    this.devices = true;
  }

  CategoriesComponent(){
    this.categories = true;
  }

  OperationsComponent(){
    this.operations = true;
  }
}
