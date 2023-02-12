import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { BotonesComponent } from './botones/botones.component';
import { ImagenesComponent } from './imagenes/imagenes.component';
import { FormularioComponent } from './formulario/formulario.component';

@NgModule({
  declarations: [AppComponent, ContadorComponent, BotonesComponent, ImagenesComponent, FormularioComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
