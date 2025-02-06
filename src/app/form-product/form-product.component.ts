import { Component } from '@angular/core';
import { Product } from '../models/products';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent {

 
  list: Product[] = [];
  
  // Objet produit temporaire pour le formulaire
  product: Product = new Product();

  // Gestion de la sauvegarde
  onSave(form: any) {
    if (form.valid) {
      // Ajouter un id unique auto-incrémenté
      this.product.id = this.list.length + 1;
      
      // Ajouter le produit à la liste
      this.list.push({ ...this.product });

      // Réinitialiser le formulaire
      form.resetForm();
      this.product = new Product(); // Réinitialisation de l'objet produit
    } else {
      console.log('Formulaire invalide');
    }
  }
}