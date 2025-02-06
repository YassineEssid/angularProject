import { Component, OnInit } from '@angular/core';
import { Categorie } from '../models/categorie';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent implements OnInit{
  
  id!:Number;

  
  constructor (private route:Router,private ar:ActivatedRoute,private servCat:CategoryService,private router:Router){}
  ngOnInit(): void {
   this.getAllCategoriesFromBackend();
  }

  
  onEditCategory(id: number): void {
    this.router.navigate(['/add-category', id]);
  }

nav(categoryId:number) {
  this.route.navigate(['/product'], {
    queryParams: { id: categoryId},
  }
  );
  ​}
  

  
  getDescription(description:string){
    alert (description);
  }

  titre : string = "";
  categories !: Categorie[];
/*   categories : Categorie[]=[
    {"id":1,"title":"Grand électroménager", "image":"assets/categorie_electromenager.jpg", "description":"hahaha", "available":true},
    {"id":2,"title":"Petit électroménager", "image":"assets/categorie_petit_electromenager.jpg", "description":"hihihi", "available":true},
    {"id":3,"title":"Produits informatiques", "image":"assets/categorie_produits_informatiques.jpg", "description":"hohoho", "available":true},
    {"id":4,"title":"Smart Phones", "image":"assets/categorie_smartPhone.jpg", "description":"hehehe", "available":true},
    {"id":5,"title":"TV, images et son", "image":"assets/categorie_tv_image_son.jpg", "description":"huhuhu", "available":true},
    {"id":6,"title":"Produits voiture", "image":"assets/produits_nettoyages.jpg", "description":"hyhyhy","available":false},
  ] */

    getAllCategoriesFromBackend (){
      this.servCat.getListCategoriesFromBackend().subscribe(data=>this.categories=data);
    }
    deleteCategoryFromBackend(category:Categorie){
      this.servCat.deleteCategoryFromBackend(category).subscribe(data=>this.getAllCategoriesFromBackend()); 

    }


}
