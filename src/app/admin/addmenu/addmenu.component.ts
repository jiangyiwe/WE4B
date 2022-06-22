import { RestaurantserviceService } from './../../restaurantservice.service';
import { MenuService } from 'src/app/menu.service';
import { Restaurant } from './../../class/restaurant';
import { Menu } from './../../class/menu';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addmenu',
  templateUrl: './addmenu.component.html',
  styleUrls: ['./addmenu.component.css']
})
export class AddmenuComponent implements OnInit {
  public menu!: Menu
  public restaurant!: number

  constructor(private service: MenuService, private servRst: RestaurantserviceService, private router: Router) {
    this.menu = new Menu(this.service.list_length + 1, "Nom", "Description", "prix", 0, 0, "./assets/img/1.png")

  }

  ngOnInit(): void {

  }

}
