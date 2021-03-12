import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TextboxComponent} from '../components/textbox/textbox.component';
import {TextboxService} from '../components/textbox/textbox.service';
import {FieldComponent} from '../components/field/field.component';
import {TileComponent} from '../components/tile/tile.component';
import {EntityComponent} from '../components/entity/entity.component';

@NgModule({
  declarations: [
    AppComponent,
    TextboxComponent,
    FieldComponent,
    TileComponent,
    EntityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    TextboxService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
