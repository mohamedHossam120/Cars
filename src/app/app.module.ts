import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PopularCarsComponent } from './popular-cars/popular-cars.component';
import { StepsComponent } from './steps/steps.component';
import { BestCarComponent } from './best-car/best-car.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { DownloadComponent } from './download/download.component';
import { CardComponent } from './card/card.component';
import { AboutComponent } from './about/about.component';
import { AllCarsComponent } from './all-cars/all-cars.component';
import { MainComponent } from './main/main.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CarDetailsComponent } from './car-details/car-details.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PopularCarsComponent,
    StepsComponent,
    BestCarComponent,
    NavBarComponent,
    FooterComponent,
    DownloadComponent,
    CardComponent,
    AboutComponent,
    AllCarsComponent,
    MainComponent,
    CarDetailsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
