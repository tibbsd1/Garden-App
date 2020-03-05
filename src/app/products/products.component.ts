
import { Component, OnInit } from "@angular/core";
import { ProductsService } from "./products.service";
import { displayModel } from "../model/display-model";
@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent implements OnInit {
  plants: displayModel[];
  constructor(private plantFetcher: ProductsService) {}
  ngOnInit(): void {
    this.getPlantData();
  } //like useEffecct
  getPlantData() {
    this.plantFetcher.getPlants().subscribe((data: displayModel[]) => {
      console.log(data);
      this.plants = data;
    });
  }
}



