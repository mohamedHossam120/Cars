import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCarsComponent } from './all-cars/all-cars.component';
import { MainComponent } from './main/main.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: MainComponent },
  { path: 'Home/Cars', component: AllCarsComponent },
  { path: 'carDetail/:id', component: CarDetailsComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
