import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondPageRoutingModule } from './second-page-routing.module';
import { SecondPageComponent } from './pages/second-page.component';
import { DialogAddComponent } from './components/dialog-add/dialog-add.component';


@NgModule({
  declarations: [SecondPageComponent, DialogAddComponent],
  imports: [
    CommonModule,
    SecondPageRoutingModule
  ]
})
export class SecondPageModule { }
