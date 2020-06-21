import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from './home/home.component';
import {MaterialModule} from '../material.module';
import {ModalSearchComponent} from '../shared/modal-search/modal-search.component';
import {MoviesListComponent} from '../components/movies-list/movies-list.component';
import {HttpClientModule} from '@angular/common/http';
import {SpeechRecognitionModule} from '@kamiazya/ngx-speech-recognition';
import { DetailMovieComponent } from './detail-movie/detail-movie.component';



@NgModule({
  declarations: [
    HomeComponent,
    ModalSearchComponent,
    MoviesListComponent,
    DetailMovieComponent
  ],
  entryComponents: [
    ModalSearchComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SpeechRecognitionModule.withConfig({
      lang: 'es-EC',
      interimResults: true,
      maxAlternatives: 10,
    }),
    MaterialModule
  ],
  exports: [
    MaterialModule,
    SpeechRecognitionModule
  ]
})
export class PageModule { }
