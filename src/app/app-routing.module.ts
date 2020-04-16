import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {DIYComponent} from './pages/diy/diy.component';
import {TMComponent} from './pages/tm/tm.component';
import {AdminComponent} from './pages/admin/admin.component';
import {BeheerProjectenComponent} from './pages/CRUD/beheer-projecten/beheer-projecten.component';
import {ForbiddenComponent} from './pages/forbidden/forbidden.component';
import {NeedAuthGuard} from './shared/security/need-auth-guard';


const routes: Routes = [
  //Hoofdpages in de navbar
  {path: '', component: HomeComponent},
  {path: 'DIY', component: DIYComponent},
  {path: 'TM', component: TMComponent},

  // admin kant, dus autentication guard op zetten
  {path: 'admin', component: AdminComponent},
  {path: 'beheerProjecten/:id', component: BeheerProjectenComponent, canActivate: [NeedAuthGuard]},

  // Error Pages
  {path: 'forbidden', component: ForbiddenComponent},

  // al de rest doorsturen naar home
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
