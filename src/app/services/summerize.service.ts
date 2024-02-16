import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SummerizeService {

  private result = new BehaviorSubject<string>('');
  result$: Observable<string> = this.result.asObservable();

  constructor(private http: HttpClient) { }

  summerize(textToSummerize: string) {
    this.newSummary('');

    const url = 'https://api-inference.huggingface.co/models/Yuss68/HAR_model';
    const token = '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';

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    this.http.post<any>(url, JSON.stringify(textToSummerize), { headers }).pipe(
      tap(summary => {
        this.newSummary(summary[0].generated_text);
      })
    ).subscribe();
  }

  newSummary(summary: string) {
    this.result.next(summary);
  }
}
