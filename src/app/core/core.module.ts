import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLayoutpageComponent } from './app-layout/app-layoutpage/app-layoutpage.component';
import { AppLoginpageComponent } from './app-layout/app-loginpage/app-loginpage.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [AppLayoutpageComponent, AppLoginpageComponent, HeaderComponent],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
