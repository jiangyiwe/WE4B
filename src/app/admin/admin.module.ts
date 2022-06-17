import { AddmenuComponent } from './addmenu/addmenu.component';
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
import { RestaurantFullComponent } from './restaurant-full/restaurant-full.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { FormsModule } from '@angular/forms';
import { CategorieserviceService } from '../categorieservice.service';
import { RestaurantserviceService } from '../restaurantservice.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    HomeComponent,
    MenuComponent,
    ContactComponent,
    AboutComponent,
    RestaurantComponent,
    SignupComponent,
    AddrestaurantComponent,
    AddmenuComponent,
    RestaurantFullComponent,
    RestaurantListComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    HttpClientModule
  ]

})
export class AdminModule { }
