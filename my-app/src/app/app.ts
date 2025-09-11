import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductList } from "./product-list/product-list";

@Component({ //Angular decorator that defines properties of component. 
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductList],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  title = signal('main user');
}
