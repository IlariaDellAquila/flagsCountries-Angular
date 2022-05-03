import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryComponent } from './Components/Country/country/country.component';
import { InputSearchComponent } from './Components/Country/input-search/input-search.component';
import { HeaderComponent } from './Components/Country/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { RotellinaComponent } from './Components/Country/rotellina/rotellina.component';
import { SelectComponent } from './Components/Country/select/select.component';

@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    InputSearchComponent,
    HeaderComponent,
    RotellinaComponent,
    SelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
