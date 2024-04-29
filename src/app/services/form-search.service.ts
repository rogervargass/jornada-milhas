import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatChipSelectionChange } from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../components/modal/modal.component';
import { CategoryType } from '../types/type';

@Injectable({
  providedIn: 'root',
})
export class FormSearchService {
  formSearch: FormGroup;

  constructor(public dialog: MatDialog) {
    this.formSearch = new FormGroup({
      oneWay: new FormControl(false),
      origin: new FormControl(null),
      destiny: new FormControl(null),
      type: new FormControl(CategoryType.ECONOMIC),
      adults: new FormControl(1),
      kids: new FormControl(0),
      babies: new FormControl(0),
    });
  }

  submit() {
    console.log(this.formSearch.value);
  }

  getValue(fieldName: string): any {
    return this.formSearch.get(fieldName)?.value;
  }

  getControl(controlName: string): FormControl {
    const control = this.formSearch.get(controlName);
    if (!control) {
      throw new Error(`Control ${controlName} not found`);
    }
    return control as FormControl;
  }

  getFormValues() {
    return this.formSearch.value;
  }

  getPassengersDescription(): string {
    let description = '';

    const adults = this.getValue('adults');
    if (adults && adults > 0) {
      description += `${adults} adulto${adults > 1 ? 's' : ''}`;
    }

    const kids = this.getValue('kids');
    if (kids && kids > 0) {
      description += `${description ? ', ' : ''}${kids} criança${
        kids > 1 ? 's' : ''
      }`;
    }

    const babies = this.getValue('babies');
    if (babies && babies > 0) {
      description += `${description ? ', ' : ''}${babies} bebê${
        babies > 1 ? 's' : ''
      }`;
    }

    return description;
  }

  changeType(event: MatChipSelectionChange, type: CategoryType) {
    if (event.selected) {
      this.formSearch.patchValue({ type });
    }
  }

  openDialog() {
    this.dialog.open(ModalComponent, {
      width: '50%',
    });
  }
}
