import { Injectable, signal } from '@angular/core';
import { LoginUser, SignUpUser } from '../modals/auth.modal';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loginUser = signal<LoginUser>({
    name: 'Jhone',
    email: '',
    username: '',
    password: '',
    isLoggedIn: false,
  });

  signUpUser = signal<SignUpUser>({
    name: '',
    email: '',
    password: '',
    username: '',
  });
  constructor() {}

  updateLoginUser(user: LoginUser): void {
    this.loginUser.update((login: LoginUser) => user);
  }

  updateSignUpUser(user: SignUpUser): void {
    this.signUpUser.update((login: SignUpUser) => user);
  }

  updateLogin(): void {
    this.loginUser.mutate((login: LoginUser) => (login.isLoggedIn = false));
  }
}
