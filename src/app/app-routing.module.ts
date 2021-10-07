import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitialFormLoadComponent } from './formload/initial-form-load/initial-form-load.component';
import { StudentDetailsComponent } from './sandra/student-details/student-details.component';

const routes: Routes = [
  {
    path: 'studentdemo',
    component: StudentDetailsComponent,
  },
  {
    path: 'load',
    component: InitialFormLoadComponent,
    data: {
      title: 'load',
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
