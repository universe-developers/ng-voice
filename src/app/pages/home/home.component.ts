import {Component, OnInit} from '@angular/core';
import {MoviesService} from '../../services/movies.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    public list;
    constructor(private _movieService: MoviesService) {
    }

    ngOnInit() {
        this._movieService.moviesPopular().subscribe(e => {
            this.list = e;
        });
    }

}
