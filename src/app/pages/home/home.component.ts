import { Component, OnInit } from '@angular/core';
import { PromotionsService } from '../../services/promotions.service';
import { ReviewService } from '../../services/review.service';
import { Promotion, Review } from '../../types/type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  promotions: Promotion[] = [];
  reviews: Review[] = [];

  constructor(
    private promotionService: PromotionsService,
    private reviewService: ReviewService
  ) {}

  ngOnInit(): void {
    this.init();
  }

  init(): void {
    this.promotionService.list().subscribe((promotions) => {
      this.promotions = promotions;
    });
    this.reviewService.list().subscribe((reviews) => {
      this.reviews = reviews;
    });
  }
}
