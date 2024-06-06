import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from '../../../app.routes';

@Component({
  selector: 'app-check-list-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './checkListPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CheckListPageComponent {}
