import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitialFormLoadComponent } from './formload/initial-form-load/initial-form-load.component';
import { StudentDetailsComponent } from './sandra/student-details/student-details.component';
import { HeaderComponent } from './jayaraj/header/header.component';
//import { StudentFormComponent } from './jayaraj/student-form/student-form.component';
//import { CountryFormComponent } from './jayaraj/country-form/country-form.component';
import { StudentclassComponent } from './finla/studentclass/studentclass.component';
import { CountrycomponentComponent } from './finla/countrycomponent/countrycomponent.component';
import { HomeComponent } from './finla/home/home.component';
import { StudentreportComponent } from './finla/studentreport/studentreport.component';
import { SubjectComponent } from './finla/subject/subject.component';
import { SubjectreportComponent } from './finla/subjectreport/subjectreport.component';
import { AllComponent } from './finla/all/all.component';
//import { StudentclassComponent } from './jayaraj/studentclass/studentclass.component';

const routes: Routes = [
  {
    path: 'studentdemo',
    component: StudentDetailsComponent,
  },
  

  {
    path: 'header',
    component: HeaderComponent,
  },

  {
    path: 'studentreport',
    component: StudentreportComponent,
  },

  {
    path: 'home',
    component: HomeComponent,
  },

  // {
  //   path: 'studentForm',
  //   component: StudentFormComponent,
  // },


  // {
  //   path: 'CountryForm',
  //   component: CountryFormComponent,
  // },
  
  {
    path: 'studentclass',
    component: StudentclassComponent
  },
  {
    path: 'countryGroup',
    component: CountrycomponentComponent
  },
  {
    path: 'subject',
    component: SubjectComponent
  },
  {
    path: 'subjectreport',
    component: SubjectreportComponent
  },
  {
    path: 'all',
    component: AllComponent
  },


  {
    path: 'homepage',
    component: InitialFormLoadComponent,
  },







  {
    path: 'load',
    component: InitialFormLoadComponent,
    data: {
      title: 'load',
    },
  },
  {
    path: 'student',
    component: StudentclassComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
