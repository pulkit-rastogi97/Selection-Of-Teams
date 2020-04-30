import { Component } from '@angular/core';
import { Product } from './product';
import { CartService } from './cart.service';

@Component({
    selector: 'cartdetails',
    templateUrl: 'cartdetails.component.html',
    styles:[
        `img{
            width:auto;
            height:130px;
        }
        th{
            text-align:center;
            background-color:peachpuff;
            fontWeight:bold;
        }
        `],
})
export class CartDetailsComponent {
    cartProducts:Product[];
    
    constructor(private cartService:CartService) { 

        // Observer has subscribed to the subject
        this.cartService.cartBroadCaster.subscribe(res =>{
            alert(res);
            this.cartProducts = JSON.parse(res);
        })

        this.cartProducts = cartService.getCartItems();
    }
    remove(index):void{
        this.cartService.removeFromCart(index);
    }
}