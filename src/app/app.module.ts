import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/demo/home/home.component';
import { InitialFormLoadComponent } from './formload/initial-form-load/initial-form-load.component';
import { StudentDetailsComponent } from './sandra/student-details/student-details.component';


import { ListComponent } from './component/demo/list/list.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    InitialFormLoadComponent,
    StudentDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
    
    
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
