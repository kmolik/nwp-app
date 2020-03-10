import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { UnitIndexService } from 'src/app/core/http/unit_index.service';
import { MatTableDataSource } from '@angular/material/table';
import { UnitIndex } from 'src/app/core/models/unit_index';
import { MatPaginator } from '@angular/material/paginator';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DbSelectComponent } from '../db-select/db-select.component';

@Component({
  selector: 'app-table',
  templateUrl: './unitsTable.component.html',
  styleUrls: ['./unitsTable.component.sass']
})
export class UnitsTableComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['id', 'unit_name', 'unitAdres', 'action'];
  dataSource = new MatTableDataSource<UnitIndex>();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    private unitIndexService: UnitIndexService,
    public dialog: MatDialog) { }

  ngOnInit() {

    this.unitIndexService.getUnits()
      .subscribe((data: UnitIndex[]) => this.dataSource.data = data);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DbSelectComponent, {
      width: '640px', disableClose: true
    });
  }
}

