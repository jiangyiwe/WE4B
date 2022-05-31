import { HomeComponent } from './admin/home/home.component';
import { AboutComponent } from './admin/about/about.component';
import { ContactComponent } from './admin/contact/contact.component';
import { MenuComponent } from './admin/menu/menu.component';
import { RestaurantComponent } from './admin/restaurant/restaurant.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
