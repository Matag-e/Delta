import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgIconsModule } from '@ng-icons/core';
import { ionPersonOutline } from '@ng-icons/ionicons';
import { ionLogoWhatsapp, ionLogoFacebook, ionLogoInstagram } from '@ng-icons/ionicons';
import { CarouselComponent } from './components/carousel/carousel.component';
import { HomeComponent } from './Pages/home/home.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { ProductsComponent } from './Pages/products/products.component';
import { CardItemsComponent } from './components/card-items/card-items.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    IntroductionComponent,
    ProductsComponent,
    HomeComponent,
    CardItemsComponent,
    TestimonialsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgIconsModule.withIcons({
      ionPersonOutline,
      ionLogoWhatsapp,
      ionLogoFacebook,
      ionLogoInstagram
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }