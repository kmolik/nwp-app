import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-db-select',
  templateUrl: './db-select.component.html',
  styleUrls: ['./db-select.component.sass']
})
export class DbSelectComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  closeDialog() {
    this.dialog.closeAll();
  }

}
