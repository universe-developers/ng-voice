import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MoviesService} from '../../services/movies.service';
import {Movie} from '../../model/movie';

@Component({
    selector: 'app-detail-movie',
    templateUrl: './detail-movie.component.html',
    styleUrls: ['./detail-movie.component.css']
})
export class DetailMovieComponent implements OnInit {
    name: string;
    movies: Movie[];

    constructor(private _routeAc: ActivatedRoute, private _movieService: MoviesService) {
    }

    ngOnInit() {
        this._routeAc.params.subscribe(e => {
            this.name = e.id;
            this._movieService.movieSearch(e.id).subscribe(results => {
                this.movies = results;
            });
        });
    }

}
