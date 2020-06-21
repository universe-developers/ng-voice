import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {ModalSearchComponent} from '../modal-search/modal-search.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public dialog: MatDialog, public _router: Router) {
  }

  ngOnInit() {
  }

  abrirdialog() {
    const data = this.dialog.open(ModalSearchComponent, {});

    data.afterClosed().subscribe(e => {
      this._router.navigate(['/movie/' + e.name], {
      });
    });
  }
}
