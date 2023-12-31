import { Injectable, signal } from '@angular/core';
import { User } from '../../modals/auth.modal';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserListService {
  userList = signal<User[]>([
    {
      userId: '',
      name: '',
      email: '',
      phone: '',
      username: '',
      password: '',
      isLoggedIn: false,
      profile_picture: '',
      background_picture: '',
      join_date: '',
      bio: '',
      place: '',
      date_of_birth: '',
      following: 0,
      followers: 0,
    },
  ]);

  constructor(private http: HttpClient) {
    this.getUserList();
  }

  public getUserList() {
    this.http.get('./assets/mocked/user.json').subscribe((res: any) => {
      this.userList.update((data) => res);
    });
  }
}
