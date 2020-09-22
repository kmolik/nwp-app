import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';


@Component({
  selector: 'app-legal-status-form',
  templateUrl: './legal-status-form.component.html',
  styleUrls: ['./legal-status-form.component.scss']
})
export class LegalStatusFormComponent implements OnInit {


  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {}

  closeDialog() {
    this.dialog.closeAll();
  }
}
