import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tweet } from 'src/app/shared/modals/tweet.modal';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-post-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './post-card.component.html',
  styles: [],
})
export class PostCardComponent {
  @Input({ required: true }) postCard!: Tweet;
  // @Input() postCard!: Tweet;
  @Input() postDelete = false;
  @Output() commentUpdate: EventEmitter<number> = new EventEmitter();
  @Output() reTweetUpdate: EventEmitter<number> = new EventEmitter();
  @Output() likeUpdate: EventEmitter<number> = new EventEmitter();
  @Output() impressionUpdate: EventEmitter<number> = new EventEmitter();
  @Output() remove: EventEmitter<string> = new EventEmitter();

  constructor(private router: Router) {}

  updateComment(): void {
    this.commentUpdate.emit();
  }

  updateReTweet(): void {
    this.reTweetUpdate.emit();
  }

  updateFavorite(): void {
    this.likeUpdate.emit();
  }

  updateImpression(): void {
    this.impressionUpdate.emit();
  }

  userDetails(): void {
    this.router.navigate([this.postCard.username]);
  }

  removePost(): void {
    this.remove.emit();
  }
}
