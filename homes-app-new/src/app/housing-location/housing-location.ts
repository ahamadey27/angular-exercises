// CommonModule gives us common directives like *ngIf and *ngFor
import { CommonModule } from '@angular/common';
// Component is the decorator, Input marks a property as an input from the parent
import { Component, Input } from '@angular/core';
// This is the TypeScript interface that describes a housing object
import { HousingLocationInterface } from '../housing-location-interface';


@Component({
  // This tag is used in templates: <app-housing-location>
  selector: 'app-housing-location',
  // standalone components can be used without declaring them in an NgModule
  standalone: true,
  // bring in common directives (ngIf/ngFor) if we need them later
  imports: [CommonModule],
  // simple inline HTML that displays the housing data passed from the parent
  template: `
    <section class="listing">
      <!-- bind image source to the input object's photo property -->
      <img class="listing-photo" [src]="housingLocation.photo" alt="Exterior-photo of {{housingLocation.name}}"> 
      <!-- show the name from the housingLocation object -->
      <h2 class="listing-heading">{{ housingLocation.name }}</h2>
      <p class="listing-location">{{ housingLocation.city }}, {{ housingLocation.state }}</p>
    </section>
  `,
  styles: ``
})
export class HousingLocation { 
  // This property receives data from the parent component.
  // The parent will set it like: <app-housing-location [housingLocation]="someObj">.
  @Input() housingLocation!: HousingLocationInterface;

}
 