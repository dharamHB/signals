import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { LoginUser } from 'src/app/shared/modals/auth.modal';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styles: [],
})
export class HeaderComponent {
  constructor(private authService: AuthService, private router: Router) {}

  get loginUser(): LoginUser {
    return this.authService.loginUser();
  }

  logout(): void {
    this.authService.updateLogin();
    this.router.navigate(['home']);
  }
}
