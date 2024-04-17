import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import {PersonComponent} from './person/person.componet'; //adicionado
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { personInputComponent } from './person/person-input.component';


@NgModule({
  declarations: [AppComponent, PersonComponent, personInputComponent], //adicionado PersonComponent
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }], 
  bootstrap: [AppComponent],
})
export class AppModule {}
