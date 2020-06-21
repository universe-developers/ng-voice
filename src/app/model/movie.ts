export class Movie {
  constructor(public originalTitle: string, public title: string,
              public posterPath: string,
              public publicbackdropPath: string,
              public overview: string) {
  }

  getImage() {
    return `https://image.tmdb.org/t/p/w500/${this.posterPath}`;
  }
}


