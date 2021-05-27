import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NutritionService } from '../../../services/nutrition.service';

@Component({
  selector: 'app-nutrition-details',
  templateUrl: './nutrition-details.component.html',
  styleUrls: ['./nutrition-details.component.css'],
})
export class NutritionDetailsComponent implements OnInit {
  nutritionContent: any;
  title: any;
  constructor(
    private nutritionService: NutritionService,
    private route: Router
  ) {}
  placeholder = ` e.g 1 teaspoon olive oil
  1 egg, lightly beaten`;
  isloading: boolean = true;
  ngOnInit(): void {}
  analyzeNutrition() {
    const data = {
      title: 'Nutrition Analysis',
      ingr: this.nutritionContent.split(/\r?\n/),
    };
    this.route.navigate(['/nutrition-summary']);
    this.nutritionService.getNutritionDetails(data).subscribe((response) => {
      const data = {
        data: this.nutritionContent.split(/\r?\n/),
        response: response,
      };
      this.nutritionService.setData(data);

      //  console.log(response);
    });
  }
}
