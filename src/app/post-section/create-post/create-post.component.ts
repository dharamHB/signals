import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TwikService } from 'src/app/shared/services/twik.service';
import { Tweet } from 'src/app/shared/modals/tweet.modal';
import { AuthService } from 'src/app/shared/services/auth.service';
import { LoginUser } from 'src/app/shared/modals/auth.modal';
import { FormsModule } from '@angular/forms';
import { generateUniqueString, getCurrentDateTime } from 'src/app/shared/utils';

@Component({
  selector: 'app-create-post',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-post.component.html',
  styles: [],
})
export class CreatePostComponent {
  createPost!: string;
  submitted = true;
  get loginUser(): LoginUser {
    return this.authService.loginUser();
  }

  constructor(
    private authService: AuthService,
    private twikService: TwikService
  ) {}

  createNewPost(): void {
    const newPost: Tweet = {
      id: generateUniqueString(10),
      username: this.loginUser.username,
      name: this.loginUser.name,
      profile_picture: this.loginUser.profile_picture ?? '',
      tweet: this.createPost,
      like_count: 0,
      retweet_count: 0,
      replay_count: 0,
      impression_count: 0,
      tweet_media: '',
      verified: true,
      created_at: getCurrentDateTime(),
    };
    this.twikService.createNewPost(newPost);
    this.createPost = '';
  }
}
