import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { StatesService } from '../../services/states.service';
import { StateUnit } from '../../types/type';

@Component({
  selector: 'app-dropdown-states',
  templateUrl: './dropdown-states.component.html',
  styleUrl: './dropdown-states.component.scss',
})
export class DropdownStatesComponent implements OnInit {
  @Input() label: string = '';
  @Input() name: string = '';
  @Input() control!: FormControl;
  @Input() prefixIcon: string = '';

  statesUnits: StateUnit[] = [];
  filteredOptions$?: Observable<StateUnit[]>;

  constructor(private statesService: StatesService) {}

  ngOnInit(): void {
    this.statesService.listStates().subscribe((states) => {
      this.statesUnits = states;
    });
    this.filteredOptions$ = this.control.valueChanges.pipe(
      startWith(''),
      map((value) => this.filterStates(value))
    );
  }

  filterStates(value: string): StateUnit[] {
    const valueFiltered = value.toLowerCase();
    const states = this.statesUnits.filter((state) =>
      state.nome.toLowerCase().includes(valueFiltered)
    );
    return states;
  }

  displayFn(state: StateUnit): string {
    return state && state.nome ? state.nome : '';
  }
}
