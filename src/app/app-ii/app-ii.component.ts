import { Component } from '@angular/core';

@Component({
  selector: 'app-appII',
  templateUrl: './app-ii.component.html',
  styleUrls: ['./app-ii.component.css']
})
export class AppIIComponent{
  title:string
  constructor() { 
    this.title = 'angular appII';
  }
}
