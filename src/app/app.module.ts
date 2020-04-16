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
import {ProjectService} from './services/project.service';
import {BeheerProjectenComponent} from './pages/CRUD/beheer-projecten/beheer-projecten.component';
import { TableProjectsCrudComponent } from './components/table-projects-crud/table-projects-crud.component';
import { ForbiddenComponent } from './pages/forbidden/forbidden.component';
import {SecurityInterceptor} from './shared/security/security.interceptor';
import {NeedAuthGuard} from './shared/security/need-auth-guard';


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
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    NoopAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: SecurityInterceptor,
    multi: true,
  },
    NeedAuthGuard,
    VariablesService,
    ProjectService
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
