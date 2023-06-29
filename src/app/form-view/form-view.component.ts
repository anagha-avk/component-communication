import { Component, Input, OnInit } from '@angular/core';
import { ViewChild, AfterViewInit } from '@angular/core';
import { FormComponent } from '../form/form.component';
import { SharedService } from '../shared.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-view',
  templateUrl: './form-view.component.html',
  styleUrls: ['./form-view.component.css'],
})
export class FormViewComponent {
  @ViewChild(FormComponent) formComponent!: FormComponent;

  oneForm!: FormGroup;
  formValues: any;
  @Input() message: any;

  constructor(
    private formbuilder: FormBuilder,
    private sharedService: SharedService,
    private Router: Router
  ) {}

  ngOninit(): void {
    this.sharedService.getFormValue().subscribe((data: any) => {
      this.formValues = data;
    });
    console.log(this.formValues);
  }
}
