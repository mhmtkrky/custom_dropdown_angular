import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CustomDropdownComponent } from './custom-dropdown/custom-dropdown.component';
import { NgxPaginationModule, PaginationControlsComponent } from 'ngx-pagination';
import { PaginationPipe } from './pipe/pagination.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, NgxPaginationModule ],
  declarations: [ AppComponent, CustomDropdownComponent, PaginationPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
