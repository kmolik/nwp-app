import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { MatButtonModule} from '@angular/material/button';



const material = [
  MatTableModule,
  MatButtonModule
];



@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
