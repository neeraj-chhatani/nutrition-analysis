import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NutritionDetailsComponent } from './Nutrition-analysis/Nutrition-details/nutrition-details/nutrition-details.component';
import { NutritionSummaryComponent } from './Nutrition-analysis/Nutrition-summary/nutrition-summary/nutrition-summary.component';

const routes: Routes = [
  { path: 'nutrition-details', component: NutritionDetailsComponent },
  { path: 'nutrition-summary', component: NutritionSummaryComponent },
  {
    path: '**',
    redirectTo: 'nutrition-details',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
