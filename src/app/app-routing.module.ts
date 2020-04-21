import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {DIYComponent} from './pages/diy/diy.component';
import {TMComponent} from './pages/tm/tm.component';
import {AdminComponent} from './pages/admin/admin.component';
import {BeheerProjectenComponent} from './pages/admin/CRUD/beheer-projecten/beheer-projecten.component';
import {ForbiddenComponent} from './pages/forbidden/forbidden.component';
import {NeedAuthGuard} from './shared/security/need-auth-guard';
import {AdminMenuComponent} from './pages/admin/admin-menu/admin-menu.component';
import {BeheerPersonenComponent} from './pages/admin/CRUD/beheer-personen/beheer-personen.component';
import {BeheerInitiatievenComponent} from './pages/admin/CRUD/beheer-initiatieven/beheer-initiatieven.component';
import {BeheerCategorieenComponent} from './pages/admin/CRUD/beheer-categorieen/beheer-categorieen.component';
import {BeheerStatussenComponent} from './pages/admin/CRUD/beheer-statussen/beheer-statussen.component';
import {BeheerChallangeComponent} from './pages/admin/CRUD/beheer-challange/beheer-challange.component';
import {BeheerAdminsComponent} from './pages/admin/CRUD/beheer-admins/beheer-admins.component';


const routes: Routes = [
  // Hoofdpages in de navbar
  {path: '', component: HomeComponent},
  {path: 'DIY', component: DIYComponent},
  {path: 'TM', component: TMComponent},

  // admin kant, dus autentication guard op zetten
  {path: 'admin', component: AdminComponent},
  {path: 'adminMenu/:id', component: AdminMenuComponent, canActivate: [NeedAuthGuard]},
  {path: 'beheerProjecten/:id', component: BeheerProjectenComponent, canActivate: [NeedAuthGuard]},
  {path: 'beheerPersonen/:id', component: BeheerPersonenComponent, canActivate: [NeedAuthGuard]},
  {path: 'beheerInitiatieven/:id', component: BeheerInitiatievenComponent, canActivate: [NeedAuthGuard]},
  {path: 'beheerCategorieen/:id', component: BeheerCategorieenComponent, canActivate: [NeedAuthGuard]},
  {path: 'beheerStatussen/:id', component: BeheerStatussenComponent, canActivate: [NeedAuthGuard]},
  {path: 'beheerWeaklyChallange/:id', component: BeheerChallangeComponent, canActivate: [NeedAuthGuard]},
  {path: 'beheerAdmins/:id', component: BeheerAdminsComponent, canActivate: [NeedAuthGuard]},

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
