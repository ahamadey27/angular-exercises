import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../product';
import { ProductDetail } from '../product-detail/product-detail';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductDetail],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})

// product array will be used to store a list of Product objects
export class ProductList {
  products: Product[] = [
    {id: 1, title: 'Keyboard'},
    {id: 2, title: 'Microphone'},
    {id: 3, title: 'Web camera'},
    {id: 4, title: 'Tablet'}
  ]; 

  selectedProduct: Product | undefined;

}
