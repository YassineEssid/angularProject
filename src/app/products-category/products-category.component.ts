import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/products';

@Component({
  selector: 'app-products-category',
  templateUrl: './products-category.component.html',
  styleUrls: ['./products-category.component.css']
})
export class ProductsCategoryComponent implements OnInit {
  idFromPath!: number;
id!:number;

  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.idFromPath=Number(this.route.snapshot.params['x']);
    console.log(this.idFromPath);
    this.listProducts=this.listProducts.filter(p=>p.categoryId==this.idFromPath);

  
  }

  listProducts : Product[]=[
   {"id":1, "name":"Refrigérateur LGInox","image":"assets/images/refrigerateur-lg.jpg","categoryId":1,
    "description":"","price":2800,"brand":"LG","promotion":0},
    {"id":2, "name":"Refrigérateur SamsungBlanc","image":"assets/images/refrigerateur_samsung.jpeg","categoryId":1,
    "description":"", "price":2400,"brand":"Samsung","promotion":0},
    {"id":3, "name":"Lave vaisselle Beko",
    "image":"assets/images/lave_vaisselle.png", "categoryId":1,
    "description":"","price":1875,"brand":"BEKO", "promotion":0},
    {"id":4, "name":"Oppo SmartPhone","image":"assets/images/oppo_smart.jpg","categoryId":4,
    "description":"", "price":1200,"brand":"OPPO","promotion":0},
    {"id":5, "name":"Hachoir",
    "image":"assets/images/hachoir.jpg","categoryId":2,
    "description":"","price":120,"brand":"Moulinex", "promotion":0},
    {"id":6, "name":"TV 50''LG","image":"assets/images/tv_lg.jpg","categoryId":5, "description":"",
    "price":1800,"brand":"LG","promotion":0},
    ]    
  

}
