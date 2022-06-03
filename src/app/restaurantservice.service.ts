import { Restaurant } from './class/restaurant';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RestaurantserviceService {

  restaurant!: Restaurant
  list_length!: number
  constructor(private http: HttpClient) {

  }

  updateLikes(restaurant: Restaurant): Observable<Restaurant> {
    return this.http.put<Restaurant>('http://localhost:3000/products/' + restaurant.id, restaurant)
  }
}
