import { Component } from '@angular/core';
import { CarsService } from 'src/services/cars.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
   cars:any[]=[];
   constructor(private _carsService:CarsService){
    this._carsService.getCars().subscribe({
      next:(myResponse)=>{
        this.cars=myResponse.cars
      },
      error:(myerror)=>{
        console.log(myerror);
      },
      complete:()=>{
        console.log('ok');
      }
    })
   }
}
