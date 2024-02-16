import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { SummerizeService } from 'src/app/services/summerize.service'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  inputText: string = '';
  
  result$!: Observable<string>;
  displayedSummary: string = '';

  loading: boolean = false;

  constructor(private summerizeService: SummerizeService) { }

  ngOnInit(): void {
    this.result$ = this.summerizeService.result$.pipe(
      tap(summary => {
        this.display(summary.split(' '));
        this.loading = false;
      })
    );
  }

  onSubmit() {
    if (this.inputText == '') return;
    this.summerizeService.summerize(this.inputText);
    this.loading = true;
  }

  display(summaryAsArray: string[]) {
    const intervalId = setInterval(() => {
      if (summaryAsArray.length == 0) { // stop condition
        clearInterval(intervalId);
      } else {
        const word = summaryAsArray.shift();
        if (word === '.') {
          this.displayedSummary += word;
        } else {
          this.displayedSummary += ' ' +  word;
        }
      }
    }, 100);
  }
}
