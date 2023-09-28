import { bootstrapApplication } from '@angular/platform-browser';
import { Routes, provideRouter } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { MainSectionComponent } from './layout/main-section/main-section.component';
import { SignupComponent } from './auth/signup/signup.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: MainSectionComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },

  {
    path: 'user',
    loadChildren: () => import('./user/user.route').then((m) => m.USER_ROUTES),
  },

  {
    path: 'post',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./post-section/posts/posts.component').then(
            (c) => c.PostsComponent
          ),
      },
    ],
  },

  {
    path: 'admin',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./admin/admin-container/admin-container.component').then(
            (c) => c.AdminContainerComponent
          ),
      },
    ],
  },

  {
    path: ':id',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./user-section/user-container/user-container.component').then(
            (c) => c.UserContainerComponent
          ),
      },
    ],
  },
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
}).catch((err) => console.error(err));
