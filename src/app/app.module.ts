import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularWebStorageModule } from 'angular-web-storage';

import { AppComponent } from './app.component';
import { GreetComponent } from './greet/greet.component';
import { HelloWorldComponent } from './helloworld.component';
import { AppIIComponent } from './app-ii/app-ii.component';
import { MenuComponent } from './menu/menu.component';
import { ProductsComponent } from './products.component';
import { AddToCartComponent } from './addtocart.component';
import { CartDetailsComponent } from './cartdetails.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { PlayersComponent } from './players/players.component';
import { TeamComponent } from './team/team.component';
import { MatchComponent } from './match/match.component';
import { HeaderComponent } from './header/header.component';
 
@NgModule({
  declarations: [
    AppComponent,
    GreetComponent,
    HelloWorldComponent,
    AppIIComponent,
    MenuComponent,
    ProductsComponent,
    AddToCartComponent,
    CartDetailsComponent,
    LoginFormComponent,
    HomeComponent,
    PlayersComponent,
    TeamComponent,
    MatchComponent,
    HeaderComponent,
    
  ],
  imports: [
    BrowserModule,
    AngularWebStorageModule,
     AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  // bootstrap: [AppComponent,AppIIComponent]
})
export class AppModule { }
