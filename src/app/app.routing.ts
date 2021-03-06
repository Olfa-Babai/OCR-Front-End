import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { SignupComponent } from './examples/signup/signup.component';
import { LandingComponent } from './examples/landing/landing.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { ListeOrdonnancesComponent } from './liste-ordonnances/liste-ordonnances.component';
import { AjoutOrdonnanceComponent } from './ajout-ordonnance/ajout-ordonnance.component';
import { GestionUsersComponent } from './users/gestion-users/gestion-users.component';
import { MajUserComponent } from './users/maj-user/maj-user.component';
import { NewOrdonnanceComponent } from './new-ordonnance/new-ordonnance.component';
import { ShowOrdonnanceComponent } from './liste-ordonnances/show-ordonnance/show-ordonnance.component';

const routes: Routes =[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',             component: ComponentsComponent },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'signup',           component: SignupComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'nucleoicons',      component: NucleoiconsComponent },
    { path: 'liste-ordonnances',      component: ListeOrdonnancesComponent, children:[
      { path: 'show-ordonnance', component: ShowOrdonnanceComponent}
    ] },
    { path: 'ajout-ordonnance',      component: AjoutOrdonnanceComponent },
    { path: 'gestion-users',      component: GestionUsersComponent },
    { path: 'maj-user',      component: MajUserComponent },
    { path: 'new-ordonnance',      component: NewOrdonnanceComponent },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
