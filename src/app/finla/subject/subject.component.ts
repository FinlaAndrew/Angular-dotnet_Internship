import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
//import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { StudentService } from 'src/app/shared/service/studentService';
//import { threadId } from 'worker_threads';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {
  // editMode!: boolean;
  subjectForm!: FormGroup;
  isValidDelete : boolean=true;
  editMode:boolean=false;
  newReg:boolean=true;
isDisabled: any;
getSubscription: any;
  MarkId: any;
  updateSubscription: any;
  deleteSubscription: any;
  isSaveChange: boolean=false;
//public saveVariables:any={};
calculateRowTotal(arg0: any[]) {
throw new Error('Method not implemented.');
}
changeSave() {
throw new Error('Method not implemented.');
}
typeAttendace(arg0: any[]) {
throw new Error('Method not implemented.');
}
//SubjectMarkForm!: FormGroup;
private formValue: any = {};
  public totalMark:any;
  private destroy$: Subject<void> = new Subject<void>();
  public subjectlist:Array<any>=[];
  public studentlist!: Array<any>;
  public saveSubscription!: Subscription;
  public id:any;
  public name:any;
  public saveArray:any={};
//teCaption: any;
  constructor(private fb: FormBuilder,private service:StudentService) { }
  get subject() {
    return this.subjectForm.get('subject') as FormControl;
  }
  ngOnInit(): void {
    this.subjectForm = this.fb.group({
      subject: [null,Validators.required]
  });
  console.log(this.subjectForm);
    this.viewSubjectcore();
    //this.viewStudents();
    
   // this.editMode=true;
  
  }
onSaveSubject(){
 // debugger;
  // this.editMode=false;
  let subjectId=this.subjectForm.get('subject')?.value;
  console.log("saveedit",this.editMode);
if (this.editMode == false) {
console.log("list",this.studentlist);
//this.fileUploadeditList[index] = Object.assign({}, element['file']);
this.formValue['studentMEDet'] =this.studentlist;
console.log("123",this.subjectForm.value);
console.log("formValue",this.formValue);
this.saveSubscription = this.service.saveSubject(subjectId,this.formValue).subscribe((response: any) => {
            console.log("response",response);
           
           // console.log("edit",this.editMode);
            alert("Saved successfully");
            this.subjectForm.reset();
            this.studentlist=[];
            this.ChangeSave;
            console.log("this.ChangeSave",this.isSaveChange);

            
});

}
else{
  this.updateMarks();
}
}
ChangeSave() {
  this.isSaveChange = true;
}
noChangeSave() {
  this.isSaveChange = false;
}


onDelete(){
 // debugger;
 let subjectId=this.subjectForm.get('subject')?.value;
  let isValidDelete = true;
  this.studentlist.forEach((item, index) => {
    console.log("123",item);
    if (item['marks'] != null || item['thirdMark'] != null) {
      console.log("isValidDelete",isValidDelete);
        isValidDelete = true;
    }
    else{
      isValidDelete = false;
    }
});
 // if (this.isValidDelete == false){
//  if(this.studentlist.length>0){
//   this.isValidDelete=false; 
//     if(this.isSaveChange = false){
//       alert("No Datas");
//     }
//   }
if(isValidDelete=false){
  alert("No Datas");
}
    
    // }
    //(this.isValidDelete=false)
  else{
  this.formValue['studentMEDet'] = this.studentlist;
   console.log("this.formValue",this.formValue);
   if (confirm('Are you sure to delete this record ?'))
   {
    this.deleteSubscription = this.service.DeleteMark(subjectId,this.formValue).subscribe((response: any) => {
    console.log(response);
    this.noChangeSave();
    this.viewStudents();
    alert('Deleted Successfully');
  },(error) => {
    alert("No data to delete");
});
 }
}

    
}
//   this.formValue['studentMEDet'] = this.studentlist;
// console.log("this.formValue",this.formValue);
//    if (confirm('Are you sure to delete this record ?'))
//     {
//       this.deleteSubscription = this.service.DeleteMark(this.formValue).subscribe((response: any) => {
//         console.log(response);
//         this.viewStudents();
//         alert("Deleted Successfully");
//       }); 
viewStudents() {
   // console.log("123",this.subjectForm.value);
    let subjectId=this.subjectForm.get('subject')?.value;
    console.log("456",subjectId);
 // this.service.viewStudent();
  this.getSubscription = this.service.getStudent(subjectId)
  .pipe(takeUntil(this.destroy$))
  .subscribe((response: any) => {
           console.log(response);
          this.studentlist = response;
          console.log(this.studentlist);
          this.id=this.studentlist[0]["studentsId"];
          this.name=this.studentlist[0]["studentname"];
          console.log("id",this.id);
          this.saveArray=this.studentlist;
});
}
viewSubjectcore() {
  // console.log("123");
 // this.service.Countryreport();
  this.getSubscription = this.service.getSubjects()
  .pipe(takeUntil(this.destroy$))
  .subscribe((response: any) => {
          console.log(response);
          this.subjectlist = response;
          console.log(this.subjectlist);
});
}
editMarks(id:any){
  this.MarkId = id;
    console.log("id",id);
    this.getSubscription = this.service.EditMark(id)
          .pipe(takeUntil(this.destroy$)).subscribe((response: any) => {
            console.log(response);
})
}
updateMarks(){
  this.formValue['studentMEDet'] = this.studentlist;
console.log("formValue",this.formValue);
  this.updateSubscription = this.service.UpdateMark(this.formValue).subscribe((response: any) => {
    console.log(response);
      this.viewStudents();
      alert("Updated successfully")
    });
}
CalculateMark(student:any){
let teMark = '0';
let ceMark = '0';


      if (student['teMark'] === '.') {
        student['teMark'] = null;
      }
      if (student['ceMark'] === '.') {
        student['ceMark'] = null;
      }
teMark = (student['marks'] && student['marks'] != null && student['marks'] !== ' ') ? student['marks'] : '0';
// peMark = (student['secMark'] && student['secMark'] != null && student['secMark'] !== ' ') ? student['secMark'] : '0';
ceMark = (student['thirdMark'] && student['thirdMark'] != null && student['thirdMark'] !== ' ') ? student['thirdMark'] : '0';
if (!student['marks'] && !student['thirdMark']) {
  student['totalMark'] = 0;
} else {
   student['totalMark'] = parseFloat(teMark)+parseFloat(ceMark);
        this.totalMark = student['totalMark'];
        //console.log("TotalMark",this.totalMark);
  student['percentage'] = Math.floor((student['totalMark']/10)* 100).toFixed(2);
   //console.log("CalculatePercentage",student['percentage']);
}
}
}


