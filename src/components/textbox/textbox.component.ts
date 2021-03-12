import { Component } from '@angular/core';

@Component({
  selector: 'textbox-cmp',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.scss']
})
export class TextboxComponent {
  text: string = 'Welcome...'
}

