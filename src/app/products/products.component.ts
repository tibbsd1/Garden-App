//products.component.ts

import { Component, OnInit } from '@angular/core';
import{ ProductsService } from "../products.service"
import { displayModel } from '../models/display-model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  plants:displayModel[]

  constructor(private plantFetcher:ProductsService) { }
 
  // Not sure if this eventLog is necessary
  eventLog(e){
    console.log(e);
  }

  ngOnInit(): void {
    this.getPlantData()}
  
  getPlantData(){
    this.plantFetcher.getPlants().subscribe((data:displayModel[])=>{
      console.log(data);
      this.plants = data;
    })
  }


//     getPlantData(){//Gets data from service, subscribe to a service this is getting plant data
//     //use plantFetcher as my service
//     //I know that in the service there should be a get method for fetching the plants
//     //After it fetches tI need to store the fetch in a variable called plants
// this.plantFetcher.getPlantData().subscribe//subscribe is like .then 
// (data=>{
//   console.log(data)
//   // this.plants=data
// })

  

}
