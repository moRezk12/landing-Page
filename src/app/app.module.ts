import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Layouts/navbar/navbar.component';
import { FooterComponent } from './Layouts/footer/footer.component';
import { BlankLayoutComponent } from './Layouts/blank-layout/blank-layout.component';
import { LandingPageComponent } from './Pages/landing-page/landing-page.component';
import { AboutComponent } from './Pages/about/about.component';
import { HeroComponent } from './Components/landingPage/hero/hero.component';
import { AboutUsComponent } from './Components/landingPage/about-us/about-us.component';
import { OurProductsComponent } from './Components/landingPage/our-products/our-products.component';
import { WhatUsComponent } from './Components/landingPage/what-us/what-us.component';
import { CustomerReviewsComponent } from './Components/landingPage/customer-reviews/customer-reviews.component';
import { ContactUsComponent } from './Components/landingPage/contact-us/contact-us.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { CollectProductComponent } from './Components/landingPage/collect-product/collect-product.component';
// Carousel
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FormsModule } from '@angular/forms';

// Translate function
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    BlankLayoutComponent,
    LandingPageComponent,
    AboutComponent,
    HeroComponent,
    AboutUsComponent,
    OurProductsComponent,
    WhatUsComponent,
    CustomerReviewsComponent,
    ContactUsComponent,
    CollectProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // Carousel
    BrowserModule,
    // BrowserAnimationsModule,
    CarouselModule ,
        // Translate
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [
      { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
