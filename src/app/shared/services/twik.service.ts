import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tweet } from '../modals/tweet.modal';

@Injectable({
  providedIn: 'root',
})
export class TwikService {
  tweetList = signal<Tweet[]>([
    {
      id: '',
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

  constructor(private http: HttpClient) {
    this.getTweetList();
  }

  public getTweetList() {
    this.http.get('./assets/mocked/tweet-list.json').subscribe((res: any) => {
      this.tweetList.set(res);
    });
  }

  updateLike(index: number): void {
    this.tweetList.update((item: Tweet[]) => {
      item[index].like_count++;
      return item;
    });
  }

  updateReTweet(index: number): void {
    this.tweetList.update((item: Tweet[]) => {
      item[index].retweet_count++;
      return item;
    });
  }

  updateComment(index: number): void {
    this.tweetList.update((item: Tweet[]) => {
      item[index].replay_count++;
      return item;
    });
  }

  updateImpression(index: number): void {
    this.tweetList.update((item: Tweet[]) => {
      item[index].impression_count++;
      return item;
    });
  }

  createNewPost(post: Tweet): void {
    this.tweetList.update((item: Tweet[]) => {
      item.unshift(post);
      return item;
    });
  }

  getUserPost(username: string): Tweet[] {
    const allTweet = this.tweetList();
    return allTweet.filter((element: Tweet) => element.username === username);
  }

  removePost(postId: string): void {
    this.tweetList.update((item: Tweet[]) =>
      item.filter((tweet: Tweet) => tweet.id !== postId)
    );
  }
}
