import { HomeComponent } from './modules/home/pages/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'',loadChildren:'./modules/home/home.module#HomeModule'},
  {path:'second',loadChildren:'./modules/second-page/second-page.module#SecondPageModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 