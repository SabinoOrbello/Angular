import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'studenti',
    pathMatch: 'full',
  },
  {
    path: 'studenti',
    loadChildren: () =>
      import('./modules/studenti/studenti.module').then(
        (m) => m.StudentiModule
      ),
  },
  {
    path: 'docenti',
    loadChildren: () =>
      import('./modules/docenti/docenti.module').then((m) => m.DocentiModule),
  },
  {
    path: '**',
    redirectTo: 'studenti',
  },
];

export default routes;
