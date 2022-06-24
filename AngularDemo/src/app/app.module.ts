import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlowersComponent } from './Component/flowers/flowers.component';
import { PixBayImagesComponent } from './pix-bay-images/pix-bay-images.component';

@NgModule({
  declarations: [
    AppComponent,
    FlowersComponent,
    PixBayImagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
