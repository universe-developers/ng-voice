import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Movie} from '../model/movie';
import {map} from 'rxjs/operators';
import {core} from '@angular/compiler';

@Injectable({
    providedIn: 'root'
})
export class MoviesService {
    private API_KEY = '<APY_KEY>';
    private URL_BASE = '<URL>';
    private movies: Movie[];
    private moviesSearch: Movie[];

    constructor(public _http: HttpClient) {
    }

    public core(route: string, query?) {
        let params = null;
        if (query) {
            params = new HttpParams()
                .append('api_key', this.API_KEY)
                .append('language', 'es-EN')
                .append('query', query);
        } else {
            params = new HttpParams()
                .append('api_key', this.API_KEY)
                .append('language', 'es-EN');
        }
        return (this._http.get(`${this.URL_BASE}${route}`, {
            params
        }));
    }

    public moviesPopular = () => {
        return (this.core('/movie/popular').pipe(map((results: { results: any[] }) => {
            this.movies = results.results.map((element: any) => {
                return new Movie(element['original_title'],
                    element['title'], element['poster_path'],
                    element['backdrop_path'],
                    element['overview']);
            });
            return this.movies;
        })));
    }

    movieSearch(name) {
        return (this.core('/search/movie', name).pipe(map((results: { results: any[] }) => {
            this.moviesSearch = results.results.map((element: any) => {
                return new Movie(element['original_title'],
                    element['title'], element['poster_path'],
                    element['backdrop_path'],
                    element['overview']);
            });
            return this.moviesSearch;
        })));
    }
}
