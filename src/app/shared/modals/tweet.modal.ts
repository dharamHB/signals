export interface Tweet {
  id: string;
  username: string;
  name: string;
  profile_picture: string;
  tweet: string;
  like_count: number;
  retweet_count: number;
  replay_count: number;
  impression_count: number;
  tweet_media: string;
  verified: boolean;
  created_at: string;
}
