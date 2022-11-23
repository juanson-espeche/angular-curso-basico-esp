import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HeroesMudole } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HeroesMudole, ContadorModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
