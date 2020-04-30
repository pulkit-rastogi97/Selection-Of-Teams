import { Component} from '@angular/core';
import { ProductsComponent } from './products.component';

@Component({
    selector: 'helloworld',
    template:`
        <h1>{{msg}}</h1>
    `,
    styles:[`
        h1{
            color:aqua;
            background-color:indigo
        }
    `]

})
export class HelloWorldComponent{
    msg:string;
    constructor(){
        
        this.msg = 'Hello World from angular app!';
    }    
}