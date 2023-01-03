import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  counter: number = 0

  constructor() { }

  ngOnInit(): void {
    let clock = this.interval(1000, 2).subscribe(console.log)

  }

  interval(delay: number, limit?: number) {
    return new Observable(observer => {
      const id = setInterval(() => {
        observer.next(this.counter++);
        if (limit && this.counter >= limit) {
          observer.unsubscribe();
        }
      }, delay);

      return () => {
        console.log('Unsubscirebed ' + id);
        clearInterval(id);
      }
    });
  }

}
