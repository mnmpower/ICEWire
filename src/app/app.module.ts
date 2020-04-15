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
import {HttpClientModule} from '@angular/common/http';
import {AdminComponent} from './pages/admin/admin.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ProjectService} from './services/project.service';
import {BeheerProjectenComponent} from './pages/CRUD/beheer-projecten/beheer-projecten.component';
import { TableSortableComponent } from './components/table-sortable/table-sortable.component';

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
    TableSortableComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    NoopAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [
    VariablesService,
    ProjectService
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
