import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../models/products';

@Component({
  selector: 'app-form-product-reactive',
  templateUrl: './form-product-reactive.component.html',
  styleUrls: ['./form-product-reactive.component.css']
})
export class FormProductReactiveComponent {
  productForm: FormGroup;
  
  list: Product[] = []; // Liste des produits
  nextId: number = 1; // ID auto-incrément

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.pattern('[a-zA-Z]*')
        ]
      ],
      image: [''],
      categoryId: ['', Validators.required],
      description: [''],
      price: [
        '',
        [Validators.required, Validators.pattern('^\\d+(\\.\\d+)?$')]
      ],
      brand: [''],
      promotion: [
        '',
        [Validators.max(100), Validators.pattern('^(0|[1-9][0-9]?)$')]
      ]
    });
  }

  onSave() {
    if (this.productForm.valid) {
      const newProduct: Product = {
        id: this.nextId++, // ID auto-incrément
        ...this.productForm.value
      };

      this.list.push(newProduct); // Ajouter le produit à la liste
      console.log('Product saved:', newProduct);
      console.log('Product list:', this.list);

      this.productForm.reset(); // Réinitialiser le formulaire
    }
  }
}


