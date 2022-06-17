import { CategorieserviceService } from './../../categorieservice.service';
import { RestaurantserviceService } from './../../restaurantservice.service';
import { Categorie } from './../../class/categorie';
import { Restaurant } from './../../class/restaurant';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addrestaurant',
  templateUrl: './addrestaurant.component.html',
  styleUrls: ['./addrestaurant.component.css']
})
export class AddrestaurantComponent implements OnInit {
  public restaurant: Restaurant;
  public categorie!: Categorie[

  ]
  constructor(private service: RestaurantserviceService, private servCate: CategorieserviceService, private router: Router) {
    this.restaurant = new Restaurant(this.service.list_length + 1, "Restaurant Nom", "Restaurant Description", "Restaurant Adresse", "Restaurant Codepostal", 0, 0, "./assets/img/0.png")

    this.servCate.getData().subscribe(data => {
      this.categorie = data
    })
  }

  ngOnInit(): void {
  }
  addRestaurant() {

    this.service.addRestaurant(this.restaurant).subscribe((data) => {
      this.restaurant = data
    })

    /*if (!this.categorie.values.name.includes(this.restaurant.categorie)) {
      let newCate = new Categorie(this.servCate.list_length + 1, this.restaurant.categorie)
      this.servCate.addCategorie(newCate).subscribe(data => {
        newCate = data
      })
    }*/

    this.router.navigateByUrl('/restaurant-list')


  }
}
