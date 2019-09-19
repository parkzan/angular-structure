import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home.component';
import { DialogAddComponent } from './components/dialog-add/dialog-add.component';


@NgModule({
  declarations: [HomeComponent, DialogAddComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
