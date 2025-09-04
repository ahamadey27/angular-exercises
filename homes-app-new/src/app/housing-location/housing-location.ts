import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { HousingLocationInterface } from '../housing-location-interface';


@Component({
  // This tag is used in templates: <app-housing-location>
  selector: 'app-housing-location',
  standalone: true,
  // bring in common directives (ngIf/ngFor) if we need them later
  imports: [CommonModule],
  // simple inline HTML that displays the housing data passed from the parent
  template: `
    <section class="listing">
      <img class="listing-photo" [src]="housingLocation.photo" alt="Exterior-photo of {{housingLocation.name}}"> 
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
 