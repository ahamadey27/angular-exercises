import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { HousingLocationInterface } from '../housing-location-interface';


@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="listing">
      <img class="listing-photo">
      <h2 class="listing-heading"></h2>
      <p class="listing-location"></p>
    </section>
  `,
  styles: ``
})
export class HousingLocation {
  @Input() housingLocation!: HousingLocationInterface;

}
 