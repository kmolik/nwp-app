import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LegalStatusFormComponent } from '../legal-status-form/legal-status-form.component';

@Component({
  selector: 'app-legal-status-table',
  templateUrl: './legal-status-table.component.html',
  styleUrls: ['./legal-status-table.component.scss']
})
export class LegalStatusTableComponent implements OnInit, AfterViewInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  ngAfterViewInit() { }

  openForm(): void {
    const dialogRef = this.dialog.open(LegalStatusFormComponent, {
      width: '640px', disableClose: true
    });
  }


  closeDialog() {
    this.dialog.closeAll();
  }
}
