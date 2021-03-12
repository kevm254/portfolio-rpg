import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {TilePosition} from '../../models/TilePosition';

@Component({
  selector: 'tile-cmp',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss'],
})
 export class TileComponent implements OnInit, OnChanges {
  @Input() tileNo: number = 0;
  @Input() tilePos: TilePosition = { x: 0, y: 0 };
  @Output() updateTileType: EventEmitter<TilePosition> = new EventEmitter<TilePosition>();
  @Output() emitTilePos: EventEmitter<TilePosition> = new EventEmitter<TilePosition>();
  tileType: string = '../assets/images/tiles/empty.jpg';
  baseUrl: string = '../assets/images/tiles/';

  ngOnInit(): void {
    this.tileType = this.getTile(this.tileNo);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes.tileNo && changes.tileNo.previousValue !== undefined && (changes.tileNo.previousValue) !== changes.tileNo.currentValue) {
      this.tileType = this.getTile(this.tileNo);
    }
  }

  emitTilePosOnHover(tilePos: TilePosition): void {
    this.emitTilePos.emit(tilePos);
  }
  getTile(tileNo: any): string {
    const tileNum = tileNo || 0;
    const tileLookup = {
      0: `${this.baseUrl}/empty.jpg`,
      1: `${this.baseUrl}/mountains.jpg`,
      2: `${this.baseUrl}/grass.jpg`,
      3: `${this.baseUrl}/mountains.jpg`,
      4: `${this.baseUrl}/mountains.jpg`,
    };
    // @ts-ignore
    console.log(tileLookup[tileNo]);
    // @ts-ignore
    return tileLookup[tileNum];
  }

  updateTileTypeOnClick(tilePos: TilePosition): void {
    this.updateTileType.emit(tilePos);
  }
}
