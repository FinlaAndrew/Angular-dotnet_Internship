import { Component, forwardRef, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { StudentService } from 'src/app/shared/service/studentService';
@Component({
  selector: 'app-subjectreport',
  templateUrl: './subjectreport.component.html',
  styleUrls: ['./subjectreport.component.scss']
})
export class SubjectreportComponent implements OnInit {
  Physics:any;
  Chemistry:any;
  Mathematics:any;
  percentage:any;
  showmarkreportList: boolean=false;
  newReg:boolean=true;
  markEntryForm!: FormGroup;
  private destroy$: Subject<void> = new Subject<void>();
  public subjectlist:Array<any>=[];
  public studentlist:Array<any>=[];
  public studentslist:Array<any>=[];
  viewSubscription: any;
  getSubscription: any;
 constructor(private fb: FormBuilder,private service: StudentService) 
 {}
 get student() {
  return this.markEntryForm.get('student') as FormControl;
}
  ngOnInit(): void {
    this.markEntryForm = this.fb.group({
      student: [null,Validators.required]
    });
    console.log(this.markEntryForm);
    this.viewStudentsreport();
  }
  resetstudent(){
    this.showmarkreportList = false;
    }
    viewStudentsreport() {
      //debugger
      this.getSubscription = this.service.Subjectreport()
      .pipe(takeUntil(this.destroy$))
      .subscribe((response: any) => {
              console.log(response);
              this.studentlist = response;
              //console.log(this.studentlist);
    });
    }
    onResetstu(){
      this.newReg=true;
      this.showmarkreportList = false;
      this.markEntryForm.reset();
      this.viewStudentsreport();
    }
    onViewstu(){
      //debugger
    this.validatemarkreport();
  if (this.markEntryForm.valid) 
  {
  console.log(this.markEntryForm.value);
  this.viewSubscription = this.service.GetSubjectReportData(this.markEntryForm.value)
        .pipe(takeUntil(this.destroy$))
        .subscribe((response: any) => {
          console.log("908",response);
          this.studentslist=response['marklist'];
          this.percentage=response['percentage'];
          //console.log("studentslist",this.studentslist);
          const i = this.studentslist.filter(s =>s.subject=='Physics');
          this.studentslist.forEach(element => {
          if (element?.subject=='Physics') {
                this.Physics=element.mark;
                console.log(this.Physics);
          }
          
          else if(element?.subject=='Chemistry'){
              this.Chemistry=element.mark;
              console.log(this.Chemistry);
          }
          else{
              this.Mathematics=element.mark;
              console.log(this.Mathematics);
          }
        });
      
          //console.log(this.Physics['mark']);
          //const i=this.Physics.find((item:any)=>item.subject === 'Physics');
          //this.Physics=i.mark;
         // console.log(this.Physics);
          //console.log(i.slice(-1).pop());
          if (response) {
            this.showmarkreportList = response;
          if (this.studentslist.length >0) {
            this.showmarkreportList = true;
            //console.log("showreportList",this.showreportList);
        } else{
            this.showmarkreportList = false;
            alert("No Data for Specified Condition");
            //console.log("showreportList",this.showreportList);
        }
      }
  else{
          alert("please enter the details");
        }


        });
    }
  }
  
    validatemarkreport(){
      [
        { name: 'student' }
    ].forEach((control) => {
        this.markEntryForm.get(control.name)?.markAsTouched();
    });
    console.log(this.validatemarkreport);
    }
}
  

