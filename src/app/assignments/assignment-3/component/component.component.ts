import { Component, OnDestroy, OnInit } from '@angular/core';
import { trigger, transition, animate, style, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-your-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css'],
  animations: [
    // Define the animation trigger name
    trigger('enterLeave', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-10px)' }),
        animate('{{ delay }}ms', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
      transition(':leave', [
        animate('0.5s', style({ opacity: 0, transform: 'translateY(-10px)' })),
      ]),
    ]),
  ],
})
export class ComponentComponent implements OnInit {
  items = ['ElEMENT-A', 'ELEMENT-B', 'ELEMENT-C']; // Elements to animate
  timer: any
  ngOnInit() {

    this.animateItems();

  }


  animateItems() {
    let index = 0;

    const interval = setInterval(() => {
      if (index < this.items.length) {
        // Add an item to the list with a delay
        index++;
      } else {
        clearInterval(interval); // Stop the interval when all items are added
        this.removeItems(); // Start removing items
      }
    }, 1500); // Add an item every 0.5 seconds
  }

  removeItems() {
    const interval = setInterval(() => {
      if (this.items.length > 0) {
        // Remove the last item from the list with a delay
        this.items.pop();
      } else {
        clearInterval(interval); // Stop the interval when all items are removed
      }
    }, 500); // Remove an item every 0.5 seconds
  }
}



