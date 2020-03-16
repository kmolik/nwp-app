import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-buildings-form',
  templateUrl: './buildings-form.component.html',
  styleUrls: ['./buildings-form.component.sass']
})
export class BuildingsFormComponent implements OnInit {

  buildingForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.buildingForm = this.fb.group({
      buildingID: '',
      buildingType: '',
      buildYear: '',
      parcelNumber: '',
      province: '',
      countie: '',
      commune: ''
    });
  }

  onSubmit() {
    console.log(this.buildingForm.value);

    //this.buildingForm.valueChanges.subscribe(console.log);
  }
}
