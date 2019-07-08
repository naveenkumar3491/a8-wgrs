import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'wgrs-lien-details',
  templateUrl: './lien-details.component.html',
  styleUrls: ['./lien-details.component.scss']
})
export class LienDetailsComponent implements OnInit, OnChanges {
  @Input() storedLiens;
  @Input() selectedLien;
  lienForm;
  constructor(private formBuilder: FormBuilder) { }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    this.lienForm = this.formBuilder.group({
      firstName: [this.selectedLien.wgsEmployee.firstName],
      lastName: [this.selectedLien.wgsEmployee.lastName],
      address: this.formBuilder.group({
      lineOne: [''],
      lineTwo: [''],
      state: [''],
      city:['']
      }),
      }); 
      this.lienForm.disable();
  }

  ngOnInit() {
    
  }
}
