import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NavbarComponent} from './shared/navbar/navbar.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {FooterComponent} from './shared/footer/footer.component';
import {HomeComponent} from './pages/home/home.component';
import {DIYComponent} from './pages/diy/diy.component';
import {TMComponent} from './pages/tm/tm.component';
import {CardComponent} from './components/card/card.component';
import {VariablesService} from './shared/variables.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AdminComponent} from './pages/admin/admin.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {pre} from './services/project.service';
import {BeheerProjectenComponent} from './pages/admin/CRUD/beheer-projecten/beheer-projecten.component';
import {TableProjectsCrudComponent} from './components/table-projects-crud/table-projects-crud.component';
import {ForbiddenComponent} from './pages/forbidden/forbidden.component';
import {SecurityInterceptor} from './shared/security/security.interceptor';
import {NeedAuthGuard} from './shared/security/need-auth-guard';
import {AdminMenuComponent} from './pages/admin/admin-menu/admin-menu.component';
import {BeheerPersonenComponent} from './pages/admin/CRUD/beheer-personen/beheer-personen.component';
import {BeheerInitiatievenComponent} from './pages/admin/CRUD/beheer-initiatieven/beheer-initiatieven.component';
import {BeheerCategorieenComponent} from './pages/admin/CRUD/beheer-categorieen/beheer-categorieen.component';
import {BeheerStatussenComponent} from './pages/admin/CRUD/beheer-statussen/beheer-statussen.component';
import {BeheerChallangeComponent} from './pages/admin/CRUD/beheer-challange/beheer-challange.component';
import {BeheerAdminsComponent} from './pages/admin/CRUD/beheer-admins/beheer-admins.component';
import {TablePersonCrudComponent} from './components/table-person-crud/table-person-crud.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {TableStatusCrudComponent} from './components/table-status-crud/table-status-crud.component';
import {TableCategoryCrudComponent} from './components/table-category-crud/table-category-crud.component';
import {CategoryService} from './services/category.service';
import {StatusService} from './services/status.service';
import {InitiatifService} from './services/initiatif.service';
import {PersonService} from './services/person.service';
import { TableInitiatifCrudComponent } from './components/table-initiatif-crud/table-initiatif-crud.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    DIYComponent,
    TMComponent,
    CardComponent,
    AdminComponent,
    BeheerProjectenComponent,
    TableProjectsCrudComponent,
    ForbiddenComponent,
    AdminMenuComponent,
    BeheerPersonenComponent,
    BeheerInitiatievenComponent,
    BeheerCategorieenComponent,
    BeheerStatussenComponent,
    BeheerChallangeComponent,
    BeheerAdminsComponent,
    TablePersonCrudComponent,
    TableStatusCrudComponent,
    TableCategoryCrudComponent,
    TableInitiatifCrudComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    NoopAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: SecurityInterceptor,
    multi: true,
  },
    NeedAuthGuard,
    VariablesService,
    pre,
    CategoryService,
    StatusService,
    InitiatifService,
    PersonService,
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
