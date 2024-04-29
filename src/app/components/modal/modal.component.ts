import { Component } from '@angular/core';
import { MatChipSelectionChange } from '@angular/material/chips';
import { FormSearchService } from '../../services/form-search.service';
import { CategoryType } from '../../types/type';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  ECONOMIC = CategoryType.ECONOMIC;
  EXECUTIVE = CategoryType.EXECUTIVE;

  constructor(public formSearchService: FormSearchService) {}

  isEconomicSelected() {
    return this.formSearchService.getValue('type') === CategoryType.ECONOMIC;
  }

  changeCategoryType(event: MatChipSelectionChange, type: CategoryType) {
    this.formSearchService.changeType(event, type);
  }
}
