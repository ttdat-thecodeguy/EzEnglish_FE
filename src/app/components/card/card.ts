import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  @Input() clickable = false;
  isFlipped = false;
  
  toggleFlip() {
    if (!this.clickable) return;
    this.isFlipped = !this.isFlipped;
  }

}
