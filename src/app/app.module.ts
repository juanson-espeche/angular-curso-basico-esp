import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HeroesMudole } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';
import { DbzModule } from './dbz/dbz.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HeroesMudole, ContadorModule, DbzModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
