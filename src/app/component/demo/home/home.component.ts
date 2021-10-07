import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Subscription, Observable } from 'rxjs';
import { Student } from 'src/app/shared/interface/student';
import { StudentService } from 'src/app/shared/service/studentService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers:[DatePipe]
  
})
export class HomeComponent implements OnInit {
  public register!: FormGroup;

  public saveSubscription!: Subscription;
  public getSubscription!: Subscription;
  public deleteSubscription!: Subscription;
  studentList!: Array<Student>;
list: any;
 submitted = false;
 public editMode: boolean = false;
 allStudents!: Observable<Student[]>;  
 public studId!: string;
 constructor( private fb: FormBuilder, private services: StudentService) { }

 get name() {
  return this.register.get('name') as FormControl;
}
get mobile() {
  return this.register.get('mobile') as FormControl;
}

get gender() {
  return this.register.get('gender') as FormControl;
}
get indian() {
  return this.register.get('indian') as FormControl;
}

// get contry() {
//   return this.register.get('contry') as FormControl;
// }
get dob() {
  return this.register.get('dob') as FormControl;
}
ngOnInit() {
  this.register = this.fb.group({
    name: [''],
    mobile: [''],
   // dob: [''],
    gender: [''],
    //indian: [''],
    //contry :[''],
  });
  // let currentvalue = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
  // this.register.get('dob').setValue(currentvalue);
  this.viewStudent();
 }

 newStudent() {
  const formvalue = this.register.value;
  console.log("123",formvalue);
  this.saveSubscription = this.services.saveData(formvalue)
  .subscribe(response => {
    this.list = response;
    console.log("qqq",this,this.list);
    if(response !== ''){
    alert("saved successfully");
    this.viewStudent();}
    else{alert("no data to save");}
  //  this.toastr.success("Saved Successfully");


  

  });
 


}
viewStudent() {
 
  const studId = this.register.value;
  this.getSubscription = this.services.viewData().subscribe(
      response => {
        //console.log("ss",response);
        this.list = response;
        console.log("dd",this.list);
      }
    );

}
deleteStudent(id: string) {
  
  this.deleteSubscription = this.services.deleteStudent(id).subscribe(response => {
   
      alert("deleted successfully");
   this.viewStudent();
   // this.toastr.success("Deleted Successfully");
    
  });

}
editStudent(studdet: Student) {
  this.register.patchValue(studdet);
  this.editMode = true;
  this.studId = studdet.id;
}

}
