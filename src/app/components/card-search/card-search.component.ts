import { Component, Input } from '@angular/core';
import { Promotion } from '../../types/type';

@Component({
  selector: 'app-card-search',
  templateUrl: './card-search.component.html',
  styleUrl: './card-search.component.scss',
})
export class CardSearchComponent {
  @Input() promotion!: Promotion;
}
