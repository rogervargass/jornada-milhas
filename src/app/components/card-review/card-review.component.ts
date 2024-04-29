import { Component, Input } from '@angular/core';
import { Review } from '../../types/type';

@Component({
  selector: 'app-card-review',
  templateUrl: './card-review.component.html',
  styleUrl: './card-review.component.scss',
})
export class CardReviewComponent {
  @Input() review!: Review;
}
