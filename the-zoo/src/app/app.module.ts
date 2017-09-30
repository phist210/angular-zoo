import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import {ZooService}             from './zoo-service';
import { AppComponent }         from './app.component';
import { AnimalFormComponent }  from './animal-form/animal-form.component';
import { AnimalListComponent }  from './animal-list/animal-list.component';
import { AnimalDetailComponent }from './animal-detail/animal-detail.component';
import { NotFoundComponent }from './page-not-found/not-found.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: AnimalFormComponent },
  { path: 'animal-center', component: AnimalListComponent },
  { path: 'animal/:id',      component: AnimalDetailComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  declarations: [
    AppComponent,
    AnimalFormComponent,
    AnimalListComponent,
    AnimalDetailComponent,
    NotFoundComponent,
  ],
  providers: [ ZooService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }