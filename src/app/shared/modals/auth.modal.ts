export interface LoginUser {
  name: string;
  email: string;
  username: string;
  password: string;
  isLoggedIn: boolean;
  profile_picture?: string;
}

export interface SignUpUser {
  name: string;
  email: string;
  password: string;
  username: string;
}

export interface User {
  userId: string;
  name: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  isLoggedIn: boolean;
  profile_picture: string;
  background_picture: string;
  join_date: string;
  bio: string;
  place: string;
  date_of_birth: string;
  following: number;
  followers: number;
}
