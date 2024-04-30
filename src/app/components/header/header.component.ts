import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private userService: UserService, private router: Router) {}

  user$ = this.userService.getUser();

  logout() {
    this.userService.logout();
    this.router.navigate(['/login']);
  }
}
