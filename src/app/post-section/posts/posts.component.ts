import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tweet } from 'src/app/shared/modals/tweet.modal';
import { PostCardComponent } from '../post-card/post-card.component';
import { HttpClientModule } from '@angular/common/http';
import { TwikService } from 'src/app/shared/services/twik.service';
import { CreatePostComponent } from '../create-post/create-post.component';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [
    CommonModule,
    PostCardComponent,
    CreatePostComponent,
    HttpClientModule,
  ],
  templateUrl: './posts.component.html',
  styles: [],
})
export class PostsComponent {
  tweetList = signal<Tweet[] | undefined>(undefined);
  constructor(private twikService: TwikService) {}

  get entityList(): Tweet[] | null {
    return this.twikService.tweetList();
  }

  updateComment(index: number): void {
    this.twikService.updateComment(index);
  }

  updateReTweet(index: number): void {
    this.twikService.updateReTweet(index);
  }

  updateLike(index: number): void {
    this.twikService.updateLike(index);
  }

  updateImpression(index: number): void {
    this.twikService.updateImpression(index);
  }
}
