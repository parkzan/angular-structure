import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLayoutpageComponent } from './app-layout/app-layoutpage/app-layoutpage.component';
import { AppLoginpageComponent } from './app-layout/app-loginpage/app-loginpage.component';



@NgModule({
  declarations: [AppLayoutpageComponent, AppLoginpageComponent],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
