import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/examine-unused-custom-utility-classes',
    pathMatch: 'full',
  },
  {
    path: 'examine-unused-custom-utility-classes',
    loadComponent: () =>
      import(
        './feature/unused-custom-utility-classes/unused-custom-utility-classes.component'
      ),
  },
  {
    path: '**',
    redirectTo: '/examine-unused-custom-utility-classes',
  },
];
