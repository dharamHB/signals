import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from '../user-list/user-list.component';

@Component({
  selector: 'app-admin-container',
  standalone: true,
  imports: [CommonModule, UserListComponent],
  templateUrl: './admin-container.component.html',
  styles: [],
})
export class AdminContainerComponent {}
