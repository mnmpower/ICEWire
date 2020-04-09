import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {DIYComponent} from './diy/diy.component';
import {TMComponent} from './tm/tm.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'DIY', component: DIYComponent },
  { path: 'TM', component: TMComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
