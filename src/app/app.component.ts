import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'TechForb-Test';
  showHeader = false;
  devices = false;
  categories = false;
  operations = false;
  @Input() user: any;


  ngOnInit(): void {
    this.user = localStorage.getItem('user')
    this.categories = true;
  }


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
