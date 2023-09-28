import { Injectable, signal } from '@angular/core';
import { Tweet } from '../modals/tweet.modal';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userPosts = signal<Tweet[]>([
    {
      id: '1',
      username: '',
      name: '',
      profile_picture: '',
      tweet: '',
      like_count: 0,
      retweet_count: 0,
      replay_count: 0,
      impression_count: 0,
      tweet_media: '',
      verified: false,
      created_at: '',
    },
  ]);

  constructor() {}

  updateUserPost(post: Tweet): void {
    const tl = this.userPosts().length - 1;
    post.id = this.userPosts()[tl].id + 1;
    this.userPosts().unshift(post);
    this.userPosts.set(this.userPosts());
  }
}
