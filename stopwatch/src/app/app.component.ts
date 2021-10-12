import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = 'Stopwatch';
  author: string = 'Fonta22';

  interval: any;

  // @ts-ignore
  time: Date = new Date(null);

  startTimer(): void {
    this.interval = setInterval(() => {
      this.time.setSeconds(this.time.getSeconds() + 1);
    }, 1000);
  }

  pauseTimer(): void {
    clearInterval(this.interval);
  }

  resetTimer(): void {
    this.time.setSeconds(0);
    this.time.setMinutes(0);
  }
}
