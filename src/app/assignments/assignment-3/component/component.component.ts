import { Component } from '@angular/core';
import { trigger, transition, animate, style, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-your-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css'],
  animations: [
    trigger('listAnimation', [
      transition(':enter', [
        query(':self', [
          style({ opacity: 0 }),
          stagger(100, animate('300ms', style({ opacity: 1 }))),
        ]),
      ]),
      transition(':leave', [
        query(':self', [
          stagger(100, animate('300ms', style({ opacity: 0 }))),
        ]),
      ]),
    ]),
  ],
})
export class ComponentComponent {
  items = ['A', 'B', 'C'];
}
