import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Constants } from '../constants';

@Injectable({
  providedIn: 'root',
})
export class NutritionService {
  private emitDataSubject = new BehaviorSubject<any>('');
  constructor(private http: HttpClient) {}

  getNutritionDetails(data): Observable<any> {
    const url = `${Constants.BASE_API_URL}/nutrition-details`;
    return this.http.post(url, data);
  }
  setData(data) {
    this.emitDataSubject.next(data);
  }
  getData() {
    return this.emitDataSubject.asObservable();
  }
  getIndividualNutrition(data) {
    const url = `${
      Constants.BASE_API_URL
    }nutrition-data?ingr=${encodeURIComponent(data)}`;
    return this.http.get<any>(url, { responseType: 'json' });
  }
}
