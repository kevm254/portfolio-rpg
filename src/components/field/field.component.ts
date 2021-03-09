import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'field-cmp',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent implements OnInit {
  data: [any][number] =     [
    [1, 1, 1, 4, 3, 2, 1, 1],
  [1, 1, 2, 1, 2, 1, 1, 1],
  [1, 1, 2, 1, 2, 1, 1, 1],
  [1, 1, 2, 1, 2, 1, 1, 1],
  [1, 1, 2, 1, 2, 1, 1, 1],
  [1, 1, 2, 1, 2, 1, 1, 1],
  [1, 1, 2, 1, 2, 1, 1, 1],
  [1, 1, 2, 1, 2, 1, 1, 1]
    ];

  constructor() {}

  ngOnInit(): void {
    console.log('The component was on init');
  }
}
