import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RatedComponent } from './rated/rated.component';

@NgModule({
  declarations: [
    AppComponent,
    RatedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GooglePlaceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
