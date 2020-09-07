import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { ProductsModule } from './products/products.module';
import { CountriesModule } from './countries/countries.module';
import { CountryService } from './countries/country.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    ProductsModule,
    CountriesModule,
    HttpClientModule,

  ],
  providers: [CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
