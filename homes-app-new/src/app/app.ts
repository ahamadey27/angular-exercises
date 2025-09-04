import {Component} from '@angular/core';
import { Home } from './home/home';

@Component({
  // Root component selector — this is the app entry point (<app-root>)
  selector: 'app-root',
  // standalone allows bootstrapping without an NgModule
  standalone: true,
  template: `
    <main>
      <header class="brand-name">
        <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
      </header>
      <section class="content">
        <app-home></app-home>
      </section>
    </main>`,
  styleUrls: ['./app.css'],
  imports: [Home]
})
export class App {
  title = 'homes';
}
