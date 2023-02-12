import { Component } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-bucles',
  templateUrl: './bucles.component.html',
  styleUrls: ['./bucles.component.css'],
})
export class BuclesComponent {
  persons: Person[] = [
    { name: 'Jean', age: 28 },
    { name: 'Maria', age: 15 },
    { name: 'Jose', age: 33 },
    { name: 'Luis', age: 45 },
  ];
}
