import { Component } from '@angular/core';

@Component({
  selector: 'greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.css']  
})
export class GreetComponent {
  name: string;
  message: string;
  constructor() {
    this.name = 'Sachin Tendulkar';
    this.message = 'How are you ' + this.name;
  }
}
