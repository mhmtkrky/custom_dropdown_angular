import { Component, forwardRef, HostBinding, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { State } from '../model/state';

@Component({
  selector: 'app-custom-dropdown',
  templateUrl: './custom-dropdown.component.html',
  styleUrls: ['./custom-dropdown.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomDropdownComponent),
      multi: true
    }
  ],
})
export class CustomDropdownComponent implements OnInit, ControlValueAccessor {
  
  pageCount: number = 1;
  maxPageSize: number = 10;

  onChange: any = () => { };
  onTouched: any = () => { };
  
  @HostBinding('attr.id') externalId: any = '';
  @Input() stateList : State[] = [];
  @Input('value') val: any = null;
  @Input() name: string = '';
  @Input() display: string = ''; 
  @Input() rowCount : number = 5;


  @Input()
  set id(value: string) {
    this._ID = value;
    this.externalId = null;
  }

  get id() {
    return this._ID;
  }

  private _ID = '';

  get value() {
    return this.val;
  }

  set value(val) {
    this.val = val;
    this.onChange(val);
    this.onTouched();
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) { 
    this.onTouched = fn;
  }

  writeValue(val: any) {
    if (val) {
      this.value = val;
    }
  }

  ngOnInit(): void {
   this.maxPageSize = Math.round((this.stateList.length / this.rowCount));
  }

  onClick(p: number) {
    if (p > 0 && p < this.maxPageSize){
      this.pageCount = p;
    }
  }
}
