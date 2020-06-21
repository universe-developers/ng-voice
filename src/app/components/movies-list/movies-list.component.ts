import {Component, Input, OnInit} from '@angular/core';
import {Movie} from '../../model/movie';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {MoviesService} from '../../services/movies.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  col = '4';
  @Input() movies: Movie[];
  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe([
      Breakpoints.Small,
      Breakpoints.HandsetPortrait
    ]).subscribe(result => {
      if (result.breakpoints['(max-width: 599.99px) and (orientation: portrait)'] === true) {
        this.col = '1';
      } else {
        this.col = '3';
      }
    });
  }

  ngOnInit() {
  }

}
