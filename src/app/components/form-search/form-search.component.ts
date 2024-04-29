import { Component } from '@angular/core';
import { FormSearchService } from '../../services/form-search.service';

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrl: './form-search.component.scss',
})
export class FormSearchComponent {
  constructor(public formSearchService: FormSearchService) {}

  onSubmit() {
    this.formSearchService.submit();
  }

  getFieldValue(fieldName: string) {
    return this.formSearchService.getValue(fieldName);
  }

  getFieldControl(controlName: string) {
    return this.formSearchService.getControl(controlName);
  }

  getDescription() {
    return this.formSearchService.getPassengersDescription();
  }

  openModal() {
    this.formSearchService.openDialog();
  }
}
