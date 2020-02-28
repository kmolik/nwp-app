import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';




const material = [
  MatTableModule,
  MatButtonModule,
  MatCardModule
];



@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
