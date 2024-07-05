import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { ProductsModule } from './products/products.module';

// Configuracion del local de la app

import localEsHN from "@angular/common/locales/es-HN";
import localFrCa from "@angular/common/locales/fr-CA";
import { registerLocaleData } from '@angular/common'

registerLocaleData( localEsHN )
registerLocaleData( localFrCa )

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    ProductsModule
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'es-HN'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
