// Angular's stuff
import { NgModule }                          from '@angular/core';
import { BrowserModule }                     from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }  from '@angular/forms';
import { RouterModule, Routes }              from '@angular/router';

// Services
import { ZooService } from './zoo-service';

// Components
import { AppComponent }          from './app.component';
import { AnimalFormComponent }   from './animal-form/animal-form.component';
import { AnimalListComponent }   from './animal-list/animal-list.component';
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';
import { NotFoundComponent }     from './page-not-found/not-found.component';

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
    ReactiveFormsModule,
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