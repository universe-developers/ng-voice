import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {resultList, SpeechRecognitionService} from '@kamiazya/ngx-speech-recognition';
import {Route} from '@angular/router';


@Component({
    selector: 'app-modal-search',
    templateUrl: './modal-search.component.html',
    styleUrls: ['./modal-search.component.css'],
    providers: [
        SpeechRecognitionService,
    ],
})
export class ModalSearchComponent implements OnInit {
    private synth = window.speechSynthesis;
    message = '';
    private voices;
    listen = ""

    constructor(public _speech: SpeechRecognitionService, public dialogRef: MatDialogRef<ModalSearchComponent>,
                @Inject(MAT_DIALOG_DATA) public data: any) {
    }

    ngOnInit() {
    }

    commandVoice() {
        if (this.synth !== null) {
            this.voices = this.synth.getVoices();
            const utterThis = new SpeechSynthesisUtterance('Que pelicula desea Buscar');
            utterThis.lang = 'es-EC';
            this.synth.speak(utterThis);
            const speking = this.synth.speaking;
            this.listen = 'warn';
            setTimeout(() => {
                this._speech.start();
            }, 2000);
            this._speech.onresult = ({results}) => {
                this.message = results.item(0).item(0).transcript;
            };
            this._speech.onend = () => {
                this.listen = '';
                this.dialogRef.close({name: this.message});
            };
        }
    }

}
