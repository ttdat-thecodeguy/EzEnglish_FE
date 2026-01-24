import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // 1. Import this
@Component({
  selector: 'app-streak-card',
  imports: [CommonModule],
  templateUrl: './streak-card.html',
  styleUrl: './streak-card.scss',
})
export class StreakCard {
days = [
    { label: 'T2', active: true },
    { label: 'T3', active: true },
    { label: 'T4', active: true },
    { label: 'T5', active: true }, // Today
    { label: 'T6', active: false },
    { label: 'T7', active: false },
    { label: 'CN', active: false }
  ];
}
