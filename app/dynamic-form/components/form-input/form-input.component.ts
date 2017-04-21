import { Component, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
  selector: 'form-input',
  styleUrls: ['form-input.component.scss'],
  template: `
    <div 
      class="dynamic-field form-input" 
      [formGroup]="group">
      <label>{{ config.label }}</label>
      <div *ngIf="html_type=='text'">
        <input
          type="text"
          [attr.placeholder]="config.placeholder"
          [formControlName]="config.name">
      </div>
      <div *ngIf="html_type=='password'">
        <input
          type="password"
          [attr.value]="config.value"
          [attr.size]="config.size"
          [attr.maxlength]="config.maxlength"
          [formControlName]="config.name">
      </div>      
    </div>
  `
})
export class FormInputComponent implements Field {
  config: FieldConfig;
  group: FormGroup;
}
