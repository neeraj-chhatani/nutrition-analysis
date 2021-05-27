import { Component, OnDestroy, OnInit } from '@angular/core';
import { forkJoin, Subscription } from 'rxjs';
import { NutritionService } from 'src/app/services/nutrition.service';

@Component({
  selector: 'app-nutrition-summary',
  templateUrl: './nutrition-summary.component.html',
  styleUrls: ['./nutrition-summary.component.css'],
})
export class NutritionSummaryComponent implements OnInit, OnDestroy {
  constructor(private nutritionService: NutritionService) {}
  subscription: Subscription;
  isloading: boolean = false;
  individualNutritionData = [];
  showTotalNutrition: boolean = false;
  nutritionData: any;
  showNutritionTable: boolean = false;
  displayedColumns: string[] = [
    'quantityDisplay',
    'selectedText',
    'calories',
    'totalWeight',
  ];
  ngOnInit(): void {
    this.isloading = true;
    this.subscription = this.nutritionService
      .getData()
      .subscribe((allNutritionData) => {
        this.nutritionData = allNutritionData;
        const overAllData = [];
        allNutritionData.data?.map((nutrition) => {
          let individualResponse = nutrition.includes(',')
            ? nutrition.split(',')[0]
            : nutrition;
          this.nutritionService
            .getIndividualNutrition(individualResponse)
            .subscribe((response) => {
              response['quantityDisplay'] = individualResponse.replace(
                /(^\d+)(.+$)/i,
                '$1'
              );
              if (!isNaN(+response['quantityDisplay'])) {
                individualResponse = individualResponse.replace(
                  response['quantityDisplay'],
                  ''
                );
              } else {
                response['quantityDisplay'] = '-';
              }
              response['selectedText'] = individualResponse;
              overAllData.push(response);
              if (overAllData.length === allNutritionData.data.length) {
                this.isloading = false;
                this.individualNutritionData = overAllData;
              }
            });
        });
      });
  }
  calculateTotalNutrition() {
    this.showTotalNutrition = true;
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
