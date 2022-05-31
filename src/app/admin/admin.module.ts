import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { SignupComponent } from './signup/signup.component';
import { AddrestaurantComponent } from './addrestaurant/addrestaurant.component';


@NgModule({
  declarations: [
    HomeComponent,
    MenuComponent,
    ContactComponent,
    AboutComponent,
    RestaurantComponent,
    SignupComponent,
    AddrestaurantComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
