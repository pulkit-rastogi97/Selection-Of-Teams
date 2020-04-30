import { Component } from '@angular/core';
import { Product } from './product';
import { ProductsService } from './products.service';

@Component({
    selector: 'products',
        template: `
        <!-- Enter Search:- <input type="text"
        (blur)="doSearch($event.target.value)" /><br/> -->
        <!-- template reference variable #-->
        Enter Search:- <input type="text" #search
        (blur)="doSearch(search.value)" /><br/><br/>
         <!-- <greet #mygreet ></greet> <br/> 
        <h1>{{mygreet.name}}</h1> -->
        <table border="3px solid black" align="center">
        <tr>
            <th>Id</th>
            <th>Name</th> 
            <th>Price</th>
            <th>Product Image</th>
            <th>Category</th>
            <th colspan='3'>Actions</th>
        </tr>
        <tr *ngFor="let product of products, let i = index">
            <td>{{product.id}}</td>
            <td><a href="{{product.id}}">{{product.name}}</a></td>
            <td>{{product.price}}</td>
            <!-- Property Binding [] -->
            <!-- <td><img src="{{product.imgPath}}" /></td> -->
            <!-- <td><img bind-src="product.imgPath" /></td> -->
            <td><img [src]="product.imgPath" /></td> 
            <td>{{product.category}}</td>
            <!-- Event Binding () -->
            <td><button *ngIf="isAdmin"
            (click)="showDetails(product)">Details</button></td>  
            <td><button [disabled]="!isAdmin">Edit</button></td>
            <td><addtocart [selectedProduct]="product"></addtocart></td>          
        </tr>
        </table>
    `,
    styles: [`img{
        width: auto;
        height: 100px;
      }   
        table{
        display: 'inline-block';
        float: left;
        margin-left: 50px;
      }
        table caption{
        text-align: center;
      }       
        th{
        text-align: center;
        background-color: peachpuff;
        fontWeight: bold;
      }
        div{
        float: right;
        width: 300px;
        margin-top: 150px;
      }
      #myHeader{
        position:absolute;
        top:0;
        right:0;
      }  `],
    providers: [ProductsService]// register service with angular DI at products component
})
export class ProductsComponent {
    products: Array<Product>
    isAdmin:boolean = true;
    // injected the service instance
    constructor(productsService: ProductsService) {
        this.products = productsService.getProducts();
    }
    showDetails(product){
        alert(product.category+' '+product.name+' Rs '+product.price);
    }

    doSearch(searchStr:string){
        var prodNames:string [] = [];
        for(var i in this.products){
            if(this.products[i].name.toLowerCase()
                .startsWith(searchStr.toLowerCase())){
                    prodNames.push(this.products[i].name);
                }
        }
        alert(prodNames);
    }
}