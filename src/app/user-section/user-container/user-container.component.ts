import { Component, Input, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tweet } from 'src/app/shared/modals/tweet.modal';
import { TwikService } from 'src/app/shared/services/twik.service';
import { PostCardComponent } from 'src/app/post-section/post-card/post-card.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-container',
  standalone: true,
  imports: [CommonModule, PostCardComponent, RouterLink],
  templateUrl: './user-container.component.html',
  styles: [],
})
export class UserContainerComponent implements OnInit {
  @Input('id') userId = '';

  userPostList = signal<Tweet[] | undefined>(undefined);
  constructor(private twikService: TwikService) {}

  get entityList(): Tweet[] | null {
    return this.twikService.getUserPost(this.userId);
  }

  ngOnInit(): void {}

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

  removePost(id: string): void {
    this.twikService.removePost(id);
  }
}
