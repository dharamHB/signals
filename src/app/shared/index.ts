import { Provider } from '@angular/core';
import { LoginComponent } from '../auth/login/login.component';
import { SignupComponent } from '../auth/signup/signup.component';
import { FooterComponent } from '../layout/footer/footer.component';
import { HeaderComponent } from '../layout/header/header.component';

export const SHARED_LAYOUT: Provider[] = [
  LoginComponent,
  SignupComponent,
  FooterComponent,
  HeaderComponent,
];
