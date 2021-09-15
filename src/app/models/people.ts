export interface People {
  results: Result[];
  info: Info;
}

export interface Info {
  seed: string;
  results: number;
  page: number;
  version: string;
}

export interface Result {
  gender: Gender;
  name: Name;
  email: string;
  picture: Picture;
  nat: string;
}

export enum Gender {
  Female = 'female',
  Male = 'male',
}

export interface Name {
  title: string;
  first: string;
  last: string;
}

export interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}
