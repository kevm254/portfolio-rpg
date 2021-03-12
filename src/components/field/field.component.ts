import {Component, OnInit} from '@angular/core';
import {TilePosition} from '../../models/TilePosition';
// @ts-ignore
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'field-cmp',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent implements OnInit {

  data: [any][number] =     [
  [2, 2, 2, 2, 3, 2, 1, 1, 1, 1, 1, 4, 3, 2, 1, 1, 3, 2, 1, 3],
  [1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 3, 2, 1, 3],
  [1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 3, 2, 1, 3],
  [1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 3, 2, 1, 3],
  [1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 3, 2, 1, 3],
  [1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 3, 2, 1, 3],
  [1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 3, 2, 1, 3],
  [1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 3, 2, 1, 3],
    [1, 1, 1, 4, 3, 2, 1, 1, 1, 1, 1, 4, 3, 2, 1, 1, 3, 2, 1, 3],
    [1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 3, 2, 1, 3],
    [1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 3, 2, 1, 3],
    [1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 3, 2, 1, 3],
    [1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 3, 2, 1, 3],
    [1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 3, 2, 1, 3],
    [1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 3, 2, 1, 3],
    [1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 3, 2, 1, 3]
    ];

  constructor() {}

  ngOnInit(): void {
    anime({
      targets: '.entity-container',
      translateX: 64,
      duration: 800
    });

    setTimeout(() => {
      anime({
        targets: '.entity-container',
        translateX: 128,
        duration: 800
      });
    }, 2000);
    console.log('The component was on init');
  }

  updateCurrentSelectedTile(tilePos: TilePosition): void {
    console.log(tilePos);
  }

  updateCurrentSelectedTileType(tilePos: TilePosition): void {
    this.data[tilePos.x][tilePos.y] = 3;
  }
}
