import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';

import { HttpClientModule } from '@angular/common/http';
import { ListeOrdonnancesComponent } from './liste-ordonnances/liste-ordonnances.component';
import { AjoutOrdonnanceComponent } from './ajout-ordonnance/ajout-ordonnance.component';
import { GestionUsersComponent } from './users/gestion-users/gestion-users.component';
import { ListeUsersComponent } from './users/liste-users/liste-users.component';
import { AjoutUserComponent } from './users/ajout-user/ajout-user.component';
import { MajUserComponent } from './users/maj-user/maj-user.component';
import { NewOrdonnanceComponent } from './new-ordonnance/new-ordonnance.component';
import { ShowOrdonnanceComponent } from './liste-ordonnances/show-ordonnance/show-ordonnance.component';
import { ModUserComponent } from './users/liste-users/mod-user/mod-user.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ListeOrdonnancesComponent,
    AjoutOrdonnanceComponent,
    GestionUsersComponent,
    ListeUsersComponent,
    AjoutUserComponent,
    MajUserComponent,
    NewOrdonnanceComponent,
    ShowOrdonnanceComponent,
    ModUserComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    ComponentsModule,
    ExamplesModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
