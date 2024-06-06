import { Routes } from '@angular/router';
import { DashboardLayoutComponent } from './presentation/layouts/dashbordLayout/dashboardLayout.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      {
        path: 'checkListPage',
        loadComponent: () =>
          import('./presentation/pages/checkListPage/checkListPage.component'),
        data: {
          icon: 'fa fa-list-ol',
          title: 'Menú',
          description: 'Menú de checklists WF3 y CADI',
        },
      },
      {
        path: 'checklistActas',
        loadComponent: () =>
          import(
            './presentation/pages/checkListActas/checkListActas.component'
          ),
        data: {
          icon: 'fa fa-list-ol',
          title: 'CheckListActas',
          description: 'Checklist para Actas digitales y Wf3',
        },
      },
      {
        path: 'checklistCadi',
        loadComponent: () =>
          import('./presentation/pages/checkListCadi/checkListCadi.component'),
        data: {
          icon: 'fa fa-list-ol',
          title: 'CheckListCadi',
          description: 'Checklist para CADI',
        },
      },
      {
        path: '**',
        redirectTo: 'checkListPage',
        pathMatch: 'full',
      },
    ],
  },
];
