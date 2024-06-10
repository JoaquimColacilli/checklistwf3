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
          icon: 'fa fa-list-alt',
          title: 'Menú',
          description: 'Menú de checklists WF3 y CADI',
          section: 'checklists',
        },
      },
      {
        path: 'checklistActas',
        loadComponent: () =>
          import(
            './presentation/pages/checkListActas/checkListActas.component'
          ),
        data: {
          icon: 'fa fa-list-alt',
          title: 'WF3/Actas',
          description: 'Checklist para Actas digitales y Wf3',
          section: 'checklists',
        },
      },
      {
        path: 'checklistCadi',
        loadComponent: () =>
          import('./presentation/pages/checkListCadi/checkListCadi.component'),
        data: {
          icon: 'fa fa-list-alt',
          title: 'CADI',
          description: 'Checklist para CADI',
          section: 'checklists',
        },
      },
      {
        path: 'microservicios',
        loadComponent: () =>
          import(
            './presentation/pages/microservicios/microservicios.component'
          ),
        data: {
          icon: 'fa fa-microchip',
          title: 'Microservicios',
          description: 'Microservicios WF3/CADI',
          section: 'microservicios',
        },
      },
      {
        path: 'usuarios',
        loadComponent: () =>
          import('./presentation/pages/usuarios/usuarios.component'),
        data: {
          icon: 'fa fa-user',
          title: 'Usuarios',
          description: 'Usuarios WF3/CADI',
          section: 'usuarios',
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
