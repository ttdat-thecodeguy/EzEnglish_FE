import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Card } from "./components/card/card";
import { Layout } from "./layouts/layout";


import { ProgressBarModule } from 'primeng/progressbar';
import { StreakCard } from './components/streak-card/streak-card';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, 
    Card, Layout, StreakCard],
  templateUrl: './app.html',
  styleUrl: './scss/app.scss'
})
export class App {
  protected readonly title = signal('EzEnglish');
}
