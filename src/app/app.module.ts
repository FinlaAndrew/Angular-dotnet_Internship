import { HttpClientModule } from '@angular/common/http';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/demo/home/home.component';
import { InitialFormLoadComponent } from './formload/initial-form-load/initial-form-load.component';
import { StudentDetailsComponent } from './sandra/student-details/student-details.component';import { ListComponent } from './component/demo/list/list.component';
import { HeaderComponent } from './jayaraj/header/header.component';
//import { StudentFormComponent } from './jayaraj/student-form/student-form.component';
//import { CountryFormComponent } from './jayaraj/country-form/country-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog';
//import {MatDialogModule} from '@angular/material/dialog';
import { StudentclassComponent } from './finla/studentclass/studentclass.component';
import { CountrycomponentComponent } from './finla/countrycomponent/countrycomponent.component';
import { StudentreportComponent } from './finla/studentreport/studentreport.component';
import { CommonModule } from '@angular/common';
//import { StudentclassComponent } from './jayaraj/studentclass/studentclass.component';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { MatDialogModule } from '@angular/material/dialog';
import { SubjectComponent } from './finla/subject/subject.component';
import { SubjectreportComponent } from './finla/subjectreport/subjectreport.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AllComponent } from './finla/all/all.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    InitialFormLoadComponent,
    StudentDetailsComponent,
    StudentclassComponent,
    CountrycomponentComponent,
    HeaderComponent,
    StudentreportComponent,
    SubjectComponent,
    SubjectreportComponent,
    AllComponent,
    //StudentFormComponent,
   // CountryFormComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    CommonModule,
    NgSelectModule,
    //NgModule,
    // NgbModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
