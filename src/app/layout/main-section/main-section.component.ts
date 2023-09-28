import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from 'src/app/auth/login/login.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { SignupComponent } from 'src/app/auth/signup/signup.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-section',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    RouterOutlet,
  ],
  templateUrl: './main-section.component.html',
  styles: [],
})
export class MainSectionComponent {}
