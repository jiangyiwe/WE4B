import { RestaurantserviceService } from './../../restaurantservice.service';
import { Restaurant } from './../../class/restaurant';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restaurant-full',
  templateUrl: './restaurant-full.component.html',
  styleUrls: ['./restaurant-full.component.css']
})
export class RestaurantFullComponent implements OnInit {


  res_idx!: number
  restaurant !: Restaurant


  constructor(private activatedroute: ActivatedRoute, service: RestaurantserviceService) {
    this.res_idx = parseInt(this.activatedroute.snapshot.paramMap.get('id') || '0')
    this.restaurant = service.getResByIndex(this.res_idx)

  }
  ngOnInit(): void {
  }

}
