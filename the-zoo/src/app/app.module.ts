import { NgModule }            from '@angular/core';
import { BrowserModule }       from '@angular/platform-browser';
import { FormsModule }         from '@angular/forms';
 
import { AppComponent }        from './app.component';
import { AnimalFormComponent } from './animal-form/animal-form.component';
 
@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    AnimalFormComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }