import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  formValues: any;
  formValue: any;
  twoForm: any;
  oneForm: any;
  data: any;

  constructor(
    private formBuilder: FormBuilder,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      fname: [''],
      lname: [''],
      email: [''],
      phone: [''],
    });
  }

  getFormValue() {
    this.sharedService.passValue(this.twoForm.value);
  }

  sendValue() {
    this.data = this.formValue.value;
    console.log(this.formValue.value);
  }
}
