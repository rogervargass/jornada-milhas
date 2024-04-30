import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormService } from '../../services/form.service';
import { RegisterService } from '../../services/register.service';
import { UserService } from '../../services/user.service';
import { User } from '../../types/type';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit {
  welcomeMessage = 'Olá, ';
  buttonText = 'ATUALIZAR';

  user!: User;
  token: string = '';
  form!: FormGroup<any> | null;

  constructor(
    private registerService: RegisterService,
    private formService: FormService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registerService.getRegister().subscribe((user) => {
      this.user = user;
      this.welcomeMessage += user.nome;
      this.getForm();
    });
  }

  getForm() {
    this.form = this.formService.getRegister();
    this.form?.patchValue({
      name: this.user.nome,
      email: this.user.email,
      birthDate: this.user.nascimento,
      cpf: this.user.cpf,
      phone: this.user.telefone,
      genre: this.user.genero,
      city: this.user.cidade,
      state: this.user.estado,
    });
  }

  update() {
    const updatedUser = {
      nome: this.form?.value.name,
      nascimento: this.form?.value.birthDate,
      cpf: this.form?.value.cpf,
      telefone: this.form?.value.phone,
      email: this.form?.value.email,
      senha: this.form?.value.password,
      genero: this.form?.value.genre,
      cidade: this.form?.value.city,
      estado: this.form?.value.state,
    };

    this.registerService.updateRegister(updatedUser).subscribe({
      next: () => {
        alert('Perfil atualizado com sucesso!');
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.error('Erro ao atualizar perfil', err);
        alert('Erro ao atualizar perfil');
      },
    });
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['/login']);
  }
}
