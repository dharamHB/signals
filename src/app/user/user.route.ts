import { Routes } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { CalculationComponent } from './calculation/calculation.component';
import { CalculationSignalComponent } from './calculation-signal/calculation-signal.component';

export const USER_ROUTES: Routes = [
  {
    path: '',
    component: ContainerComponent,
    providers: [],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'calculation',
      },
      {
        path: 'calculation',
        component: CalculationComponent,
      },
      {
        path: 'calculation-signals',
        component: CalculationSignalComponent,
      },
    ],
  },
];
