import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {DIYComponent} from './pages/diy/diy.component';
import {TMComponent} from './pages/tm/tm.component';


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
