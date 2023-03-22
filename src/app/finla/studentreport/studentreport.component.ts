import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
//import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { StudentService } from 'src/app/shared/service/studentService';

//import { get } from 'http';
//import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-studentreport',
  templateUrl: './studentreport.component.html',
  styleUrls: ['./studentreport.component.scss']
})
export class StudentreportComponent implements OnInit {
  editMode:boolean=false;
  newReg:boolean=true;
  showreportList: boolean=false;
  dropDownForm!: FormGroup;
  private destroy$: Subject<void> = new Subject<void>();

  public getSubscription!: Subscription;
  public viewSubscription!: Subscription;
 // countryGroup: any;
  public countrylist:Array<any>=[];
  public studentlist:Array<any>=[];
  toast: any;
  
  constructor(private fb: FormBuilder,private changeDetectorRef: ChangeDetectorRef,private service: StudentService) 
  {
  }
  get country() {
    return this.dropDownForm.get('country') as FormControl;
  }
  get gender() {
    return this.dropDownForm.get('gender') as FormControl;
  }
  get age() {
    return this.dropDownForm.get('age') as FormControl;
  }
  get radage() {
    return this.dropDownForm.get('radage') as FormControl;
  }
  
  ngOnInit(): void {
    this.dropDownForm = this.fb.group({
      country: [null,Validators.required],
      gender: [null,Validators.required],
      age:[null],
      radage: ['0']
  });
  console.log(this.dropDownForm);
  //var items=this.service.Countryreport();
  this.viewCountryreport();
  //this.onView();
  }
resetcountry(){
  this.showreportList = false;
  }
viewCountryreport() {
  // console.log("123");
 // this.service.Countryreport();
  this.getSubscription = this.service.Countryreport()
  .pipe(takeUntil(this.destroy$))
  .subscribe((response: any) => {
          console.log(response);
          this.countrylist = response;
          console.log(this.countrylist);
});
}
onReset(){
  this.newReg=true;
  this.showreportList = false;
  this.dropDownForm.reset();
  this.dropDownForm.get('radage')?.setValue("0");
}
onView(){
  //debugger;
  this.validatereport();
  if (this.dropDownForm.valid) 
  {
  console.log(this.dropDownForm.value);
  this.viewSubscription = this.service.GetStudentReportData(this.dropDownForm.value)
        .pipe(takeUntil(this.destroy$))
        .subscribe((response: any) => {
          //console.log(response);
          this.studentlist=response;
          //console.log("studentlist",this.studentlist.length);
          if (response) {
            this.showreportList = response;
          if (this.studentlist.length >0) {
            this.showreportList = true;
            //console.log("showreportList",this.showreportList);
        } else{
            this.showreportList = false;
            alert("No Data for Specified Condition");
            //console.log("showreportList",this.showreportList);
        }
      }
  else{
          alert("please enter the details");
        }


        });
}}
validatereport(){
  [
    { name: 'country' },
    { name: 'gender'}
].forEach((control) => {
    this.dropDownForm.get(control.name)?.markAsTouched();
});
console.log(this.validatereport);
}
}
