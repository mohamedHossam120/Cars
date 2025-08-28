import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarsService } from '../../services/cars.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {
  car: any;

  constructor(
    private route: ActivatedRoute,
    private carsService: CarsService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.carsService.getCarsById(id).subscribe({
        next: (response) => {
          this.car = response.Car; 
        },
        error: (error) => {
          console.error('Error fetching car details:', error);
        }
      });
    }
  }
}
