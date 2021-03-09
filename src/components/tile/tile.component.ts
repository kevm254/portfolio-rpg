import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'tile-cmp',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss'],
})
 export class TileComponent implements OnInit {
  @Input() tileNo: number = 0;
  baseUrl: string = '../assets/images/tiles/';
  tileType: string = '../assets/images/tiles/empty.jpg';

  ngOnInit(): void {
    this.tileType = this.getTile(this.tileNo);
  }

  getTile(tileNo: any): string {
    const tileNum = tileNo || 0;
    const tileLookup = {
      0: '../assets/images/tiles/empty.jpg',
      1: '../assets/images/tiles/mountains.jpg',
      2: '../assets/images/tiles/grass.jpg',
      3: '../assets/images/tiles/mountains.jpg',
      4: '../assets/images/tiles/mountains.jpg'
    };
    // @ts-ignore
    console.log(tileLookup[tileNo]);
    // @ts-ignore
    return tileLookup[tileNum];
  }
}
