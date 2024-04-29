import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormService } from '../../services/form.service';
import { RegisterService } from '../../services/register.service';
import { User } from '../../types/type';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  perfilComponent = false;

  constructor(
    private formService: FormService,
    private registerService: RegisterService,
    private router: Router
  ) {}

  register() {
    const registerForm = this.formService.getRegister();

    if (registerForm?.invalid) return;

    const user: User = {
      nome: registerForm?.value.name,
      nascimento: registerForm?.value.birthDate,
      cpf: registerForm?.value.cpf,
      cidade: registerForm?.value.city,
      email: registerForm?.value.email,
      senha: registerForm?.value.password,
      genero: registerForm?.value.genre,
      telefone: registerForm?.value.phone,
      estado: registerForm?.value.state,
    };

    this.registerService.register(user).subscribe(() => {
      this.router.navigate(['/login']);
    });
  }
}
