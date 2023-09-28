import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { LoginUser } from 'src/app/shared/modals/auth.modal';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        username: [
          '',
          [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(20),
          ],
        ],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40),
          ],
        ],
      }
      // {
      //   validators: [Validation.match('password', 'confirmPassword')],
      // }
    );
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.form.valid) {
      const login: LoginUser = {
        name: 'Dharam',
        email: '',
        username: this.form.value.username,
        password: this.form.value.password,
        profile_picture: 'https://i.pravatar.cc/250?img=4',
        isLoggedIn: true,
      };
      this.authService.updateLoginUser(login);

      if (login.username === 'admin') {
        this.router.navigate(['admin']);
      } else if (login.username === 'user') {
        this.router.navigate(['user']);
      } else {
        this.router.navigate(['post']);
      }
    }
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
}
