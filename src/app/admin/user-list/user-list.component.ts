import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UserListService } from 'src/app/shared/services/admin/user-list.service';
import { User } from 'src/app/shared/modals/auth.modal';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './user-list.component.html',
  styles: [],
})
export class UserListComponent {
  userList = signal<User[] | undefined>(undefined);
  constructor(private adminUserService: UserListService) {}

  get entityList(): User[] | null {
    return this.adminUserService.userList();
  }

  updateUserList(index: number): void {
    this.adminUserService.updateUserList(index);
  }

  changePhone(phone: string): string {
    console.log(phone);
    return '+91' + phone;
  }

  changeBackground(index: number) {
    console.log(index);
  }
}
