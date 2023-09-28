import { Provider } from '@angular/core';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

export const AUTH_COMPONENT: Provider[] = [LoginComponent, SignupComponent];
