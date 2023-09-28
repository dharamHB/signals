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
      console.log(res);
      this.tweetList.update((data) => res);
    });
  }

  updateLike(index: number): void {
    this.tweetList()[index].like_count = this.tweetList()[index].like_count + 1;
    this.tweetList.set(this.tweetList());
  }

  updateReTweet(index: number): void {
    this.tweetList()[index].retweet_count =
      this.tweetList()[index].retweet_count + 1;
    this.tweetList.set(this.tweetList());
  }

  updateComment(index: number): void {
    this.tweetList()[index].replay_count =
      this.tweetList()[index].replay_count + 1;
    this.tweetList.set(this.tweetList());
  }

  updateImpression(index: number): void {
    this.tweetList()[index].impression_count =
      this.tweetList()[index].impression_count + 1;
    this.tweetList.set(this.tweetList());
  }

  createNewPost(post: Tweet): void {
    this.tweetList().unshift(post);
    this.tweetList.set(this.tweetList());
  }

  getUserPost(username: string): Tweet[] {
    const allTweet = this.tweetList();
    return allTweet.filter((element: Tweet) => element.username === username);
  }

  removePost(postId: string): void {
    const tweetList = this.tweetList().filter(
      (tweet: Tweet) => tweet.id !== postId
    );
    console.log(this.tweetList);
    this.tweetList.set(tweetList);
  }
}
