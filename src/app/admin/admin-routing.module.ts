import { AddrestaurantComponent } from './addrestaurant/addrestaurant.component';
import { SignupComponent } from './signup/signup.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MenuComponent } from './menu/menu.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'restaurant', component: RestaurantComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'addRestaurant', component: AddrestaurantComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
