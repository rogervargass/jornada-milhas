import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { FormService } from '../../services/form.service';
import { StateUnit } from '../../types/type';
import { FormValidations } from '../../validators/form-validations';

@Component({
  selector: 'app-form-base',
  templateUrl: './form-base.component.html',
  styleUrl: './form-base.component.scss',
})
export class FormBaseComponent implements OnInit {
  registerForm!: FormGroup;
  stateControl = new FormControl<StateUnit | null>(null, Validators.required);

  @Input() perfilComponent!: boolean;
  @Output() handleClick: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private formBuilder: FormBuilder,
    private formService: FormService
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: [null, Validators.required],
      birthDate: [null, [Validators.required]],
      cpf: ['12312312123', [Validators.required]],
      city: ['City', Validators.required],
      email: ['chapolin@email.com', [Validators.required, Validators.email]],
      password: ['123', [Validators.required, Validators.minLength(3)]],
      genre: ['outro'],
      phone: ['12312312123', Validators.required],
      state: this.stateControl,
      emailConfirmation: [
        'chapolin@email.com',
        [
          Validators.required,
          Validators.email,
          FormValidations.equalTo('email'),
        ],
      ],
      passwordConfirmation: [
        '123',
        [
          Validators.required,
          Validators.minLength(3),
          FormValidations.equalTo('password'),
        ],
      ],
      acceptTerms: [false, [Validators.requiredTrue]],
    });
    this.formService.setRegister(this.registerForm);
  }

  submit(): void {
    this.handleClick.emit();
  }
}
