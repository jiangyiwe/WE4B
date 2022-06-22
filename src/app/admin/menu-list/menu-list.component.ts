import { Restaurant } from './../../class/restaurant';
import { Menu } from './../../class/menu';
import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/menu.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {
  restaurant!: Restaurant
  MenuArray: Menu[] = []
  constructor(private service: MenuService) {
    this.service.getDatabyRestaurant(this.restaurant).subscribe(data => {
      this.MenuArray = data
    })
  }

  ngOnInit(): void {
  }

}
