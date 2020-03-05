import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
//Service returns the 'get'
  constructor(private http:HttpClient) {}
getPlants(){
  return this.http.get("http://localhost:3000/api/product/")
}

deletePlant(){
  return this.http.delete("localhost blah blah")
}
}