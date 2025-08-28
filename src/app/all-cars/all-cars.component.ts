import { Component } from '@angular/core';
import { CarsService } from 'src/services/cars.service';

@Component({
  selector: 'app-all-cars',
  templateUrl: './all-cars.component.html',
  styleUrls: ['./all-cars.component.css']
})
export class AllCarsComponent {
  cars: any[] = [];
  page: number = 1;
  constructor(private _carsService: CarsService) {
    this._carsService.getCars().subscribe({
      next: (myResponse) => {
        this.cars = myResponse.cars;
      },
      error: (myerror) => {
        console.log(myerror);
      },
      complete: () => {
        console.log('ok');
      }
    })
  }
}
