import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { State, states } from './model/state';


@Component({
  selector: 'ard-example-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  stateList: State[] = states;
  myForm: FormGroup;
  formValue = null;
  value = null;

  constructor(private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      myState: null
    });
   }

  submit() {
    if (this.myForm){
      this.formValue = this.myForm.controls.myState.value;
    }
  }
}
