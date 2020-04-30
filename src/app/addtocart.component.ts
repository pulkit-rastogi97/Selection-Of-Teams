import { Component, Input} from '@angular/core';
import { Product } from './product';
import { CartService } from './cart.service';

@Component({
    selector: 'addtocart',
    template:`
    <button (click)="addProduct()">Add To Cart!</button>
    `,
    //providers:[CartService]
})
export class AddToCartComponent {

    // Passing data from parent to child
    @Input()
    selectedProduct:Product;

    // private cartService:CartService;
    // constructor(cartService:CartService) { 
    //     this.cartService = cartService;
    // }
    
    constructor(private cartService:CartService) { }

    addProduct(){
        alert(this.selectedProduct.name);
        this.cartService.addToCart(this.selectedProduct);
    }

}