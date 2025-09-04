import { Component } from '@angular/core';
// Import the housing-location component so we can use <app-housing-location>
import { HousingLocation } from '../housing-location/housing-location'; 
import { CommonModule } from '@angular/common';


@Component({
  // Home component that groups search + results
  selector: 'app-home',
  // Standalone component (no NgModule declaration required)
  standalone: true,
  // Import CommonModule for basic directives and the child component
  imports: [CommonModule, HousingLocation],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by City">
        <button class="primary" type="button">Search</button>
      </form> 
    </section>
    <section class="result">
      <app-housing-location></app-housing-location>
    </section>
  `,
  styles: [`
    .results {
  display: grid;
  column-gap: 14px;
  row-gap: 14px;
  grid-template-columns: repeat(auto-fill, minmax(400px, 400px));
  margin-top: 50px;
  justify-content: space-around;
}
input[type="text"] {
  border: solid 1px var(--primary-color);
  padding: 10px;
  border-radius: 8px;
  margin-right: 4px;
  display: inline-block;
  width: 30%;
}
button {
  padding: 10px;
  border: solid 1px var(--primary-color);
  background: var(--primary-color);
  color: white;
  border-radius: 08px;
}
@media (min-width: 500px) and (max-width: 768px) {
  .results {
      grid-template-columns: repeat(2, 1fr);
  }
  input[type="text"] {
      width: 70%;
  }   
}
@media (max-width: 499px) {
  .results {
      grid-template-columns: 1fr;
  }    
}
    `]
})
export class Home {

}
