import { Component } from '@angular/core';
import { ProgressBarModule } from 'primeng/progressbar';
import { CarouselModule } from 'primeng/carousel';
import { StreakCard } from './../../components/streak-card/streak-card';

@Component({
  selector: 'app-dashboard',
  imports: [ProgressBarModule, StreakCard, CarouselModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
listeningLessons = [
    { id: 1, title: 'Bài nghe 1', progress: 60, image: 'assets/lesson1.jpg' },
    { id: 2, title: 'Bài nghe 2', progress: 30, image: 'assets/lesson2.jpg' },
    { id: 3, title: 'Bài nghe 3', progress: 0, image: 'assets/lesson3.jpg' },
    { id: 4, title: 'Bài nghe 4', progress: 90, image: 'assets/lesson4.jpg' },
    { id: 5, title: 'Bài nghe 5', progress: 10, image: 'assets/lesson5.jpg' }
  ];
  responsiveOptions: any[] = [
    {
      breakpoint: '1200px',
      numVisible: 4,
      numScroll: 1
    },
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 1
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
    }
  ];
}
