import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InitialFormLoadComponent } from './formload/initial-form-load/initial-form-load.component';
import { StudentDetailsComponent } from './sandra/student-details/student-details.component';


@NgModule({
  declarations: [
    AppComponent,
    InitialFormLoadComponent,
    StudentDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
