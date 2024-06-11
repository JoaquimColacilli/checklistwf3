import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarMenuItemComponent } from '../../components/sidebarMenuItem/sidebarMenuItem.component';
import { routes } from '../../../app.routes';

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, SidebarMenuItemComponent],
  templateUrl: './dashboardLayout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardLayoutComponent {
  public groupedRoutes: { [key: string]: any[] } = {};

  constructor() {
    const childrenRoutes = routes[0].children?.filter(
      (route) => route.data && route.path !== 'checkListPage'
    );
    if (childrenRoutes) {
      this.groupedRoutes = childrenRoutes.reduce((acc, route) => {
        const section = route.data?.section || 'default';
        if (!acc[section]) {
          acc[section] = [];
        }
        acc[section].push(route);
        return acc;
      }, {} as { [key: string]: any[] });
    }
  }
}
