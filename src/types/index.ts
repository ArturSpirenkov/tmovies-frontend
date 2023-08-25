export interface ITab {
  title: string
  emoji: string
  id: string
}

export interface IFlashNews  {
  id: number;
  rotate: number;
  image: string;
  text: string;
  date: string;
}

export interface IMovieFeed {
  title: string
  poster: string
  year: string
  id: string
  rate: string
  link?: string
}
