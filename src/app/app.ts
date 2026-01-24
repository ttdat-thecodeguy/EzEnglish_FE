import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Card } from "./components/card/card";
import { Layout } from "./layouts/layout";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Card, Layout],
  templateUrl: './app.html',
  styleUrl: './scss/app.scss'
})
export class App {
  protected readonly title = signal('EzEnglish');
}
