import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgIconsModule } from '@ng-icons/core';
import { HttpClientModule } from '@angular/common/http';
import {
  ionPersonOutline,
  ionLogoWhatsapp,
  ionLogoFacebook,
  ionLogoInstagram,
  ionAddOutline,
  ionRemove,
  ionAddCircleOutline,
  ionRemoveCircleOutline,
} from '@ng-icons/ionicons';
import { CarouselComponent } from './components/carousel/carousel.component';
import { HomeComponent } from './Pages/home/home.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { ProductsComponent } from './Pages/products/products.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './Pages/login/login.component';
import { RegisterComponent } from './Pages/register/register.component';
import { CarrinhoComponent } from './Pages/carrinho/carrinho.component';
import { ForgotPassComponent } from './Pages/forgot-pass/forgot-pass.component';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FornecedoresComponent } from './Pages/fornecedores/fornecedores.component';
import { MatTabsModule } from '@angular/material/tabs';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    IntroductionComponent,
    ProductsComponent,
    HomeComponent,
    TestimonialsComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    CarrinhoComponent,
    ForgotPassComponent,
    FornecedoresComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatTabsModule,
    HttpClientModule,
    NgIconsModule.withIcons({
      ionPersonOutline,
      ionLogoWhatsapp,
      ionLogoFacebook,
      ionLogoInstagram,
      ionAddOutline,
      ionRemove,
      ionRemoveCircleOutline,
      ionAddCircleOutline,
    }),
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
