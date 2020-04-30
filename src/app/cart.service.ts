// import { Injectable } from '@angular/core';
// import { Product } from './product';

// @Injectable()
// export class CartService {
//     cart:Product[];

//     constructor() {
//         this.cart = new Array<Product>();
//      }
//     addToCart(product:Product):void{
//         this.cart = this.cart.concat(product);
//         console.log('Added to the cart '+product.name);
//         console.log(this.cart);
//     }
//     getCartItems():Product []{
//         console.log(this.cart);
//         return this.cart;
//     }
// }

import { Injectable } from '@angular/core';
import { Product } from './product';
import { Subject } from 'rxjs-compat/Subject';
import { SessionStorage } from 'angular-web-storage';

@Injectable()
export class CartService {
    cart: Product[];

    //@SessionStorage()
    myCart: string;

    // subject
    private cartSource = new Subject<string>();

    // broadcaster
    cartBroadCaster = this.cartSource.asObservable();

    constructor() {
        if (this.myCart) {
            this.cart = JSON.parse(this.myCart);
        }
        else {
            this.cart = new Array<Product>();
        }
    }
    addToCart(product: Product): void {
        this.cart = this.cart.concat(product);
        console.log('Added to the cart ' + product.name);
        //console.log(this.cart);

        this.myCart = JSON.stringify(this.cart);

        // Notify to the observers
        this.cartSource.next(this.myCart);
    }
    getCartItems(): Product[] {
        console.log(this.cart);
        return this.cart;
    }
    removeFromCart(index: number): void {
        this.cart.splice(index,1);
        console.log('Removed from the cart!');
        this.myCart = JSON.stringify(this.cart);
        // Notify to the observer
        this.cartSource.next(this.myCart);
    }
}