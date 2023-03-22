// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
// import { Router } from '@angular/router';

// import { CountryFormComponent } from '../country-form/country-form.component';
// import {MatDialog,MatDialogConfig} from '@angular/material/dialog';

// @Component({
//   selector: 'app-student-form',
//   templateUrl: './student-form.component.html',
//   styleUrls: ['./student-form.component.scss']
// })
// export class StudentFormComponent implements OnInit {
//   newReg:boolean=true;


//   feeTestFormGroup!: FormGroup;

  
//   students=[
//     { name:'Asif',mobno:9495130452,gender:'Male',dob:'1999-12-31',country:'India',isIndianCitizen:'true'},
//     { name:'Varun',mobno:8495230452,gender:'Male',dob:'1998-02-11',country:'India',isIndianCitizen:'true'},
//     { name:'Arya',mobno:7455130452,gender:'Female',dob:'1997-06-21',country:'India',isIndianCitizen:'true'}
//   ]


//   constructor(private fb: FormBuilder,private router: Router,private dialog:MatDialog) { }

  

//   get name() {
//     return this.feeTestFormGroup.get('name') as FormControl;
//   }

//   get mobno() {
//     return this.feeTestFormGroup.get('mobno') as FormControl;
//   }

//   get gender() {
//     return this.feeTestFormGroup.get('gender') as FormControl;
//   }

//   get dob() {
//     return this.feeTestFormGroup.get('dob') as FormControl;
//   }

//   get country() {
//     return this.feeTestFormGroup.get('country') as FormControl;
//   }

//   get isIndianCitizen() {
//     return this.feeTestFormGroup.get('isIndianCitizen') as FormControl;
//   }


//   ngOnInit(): void {
    

//     this.feeTestFormGroup = this.fb.group({
//       name: ['', Validators.required],
//       mobno: ['', Validators.required],
//       gender: ['Male', ],
//       dob: ['', Validators.required],
//       country: ['', Validators.required],
//       isIndianCitizen: [true],
     
      
     
//     });
//   }

//   onGotoHomeclick() {
//     this.router.navigate(['/homepage']);
//   }

 

//   openCountryComponent() {
//     const dialogConfig =new MatDialogConfig();
//     dialogConfig.autoFocus=true;

//     this.dialog.open(CountryFormComponent)
    
  
//   }

  
//   onReset()
//   {
//     this.newReg=true;
//     this.feeTestFormGroup.reset();
//     this.isIndianCitizen.setValue(true);
//     this.gender.setValue('Male');
//     this.country.setValue('');
    
  

//   }


 

//   addStudent()
//   {
  
//       this.students.push(this.feeTestFormGroup.value);
     
//       this.feeTestFormGroup.reset();
//       this.isIndianCitizen.setValue(true);
//       this.gender.setValue('Male');
//       this.country.setValue('');
  
//   }

//   deleteStudent(i:any)
//   {
//     this.students.splice(i,1);
//     alert("Deleted Successfully");
 
//     console.log(i)
   

    
//   }

//   myValue:any;

 

//   editstudent(editstudentInfo:any)
//   {

//     this.feeTestFormGroup.setValue(this.students[editstudentInfo]);
//     this.myValue=editstudentInfo;
//     this.newReg=false


   
//   }


//   updateStudent()
//   {
//     let editstudentInfo=this.myValue;
//     for(let i=0;i<this.students.length;i++)
//     {
//       if(i==editstudentInfo)
//       {
//         this.students[i]=this.feeTestFormGroup.value;

//          this.feeTestFormGroup.reset();
//       this.isIndianCitizen.setValue(true);
//       this.gender.setValue('Male');
//       this.country.setValue('');
        
//       }
//     }

    


//   }
 

//   onSave()
//   {
//     console.log(this.feeTestFormGroup.status);
//     if (this.newReg==true){
    
//       this.students.push(this.feeTestFormGroup.value);
//       alert("Added Successfully");
     
//       this.feeTestFormGroup.reset();
//       this.isIndianCitizen.setValue(true);
//       this.gender.setValue('Male');
//       this.country.setValue('');
      
//      }

//      else  {

//       let editstudentInfo=this.myValue;
//       for(let i=0;i<this.students.length;i++)
//       {
//         if(i==editstudentInfo)
//         {
//           this.students[i]=this.feeTestFormGroup.value;
//           alert("Updated Successfully");
  
//            this.feeTestFormGroup.reset();
//         this.isIndianCitizen.setValue(true);
//         this.gender.setValue('Male');
//         this.country.setValue('');
//         this.newReg=true


//         }
//       }




//      }

//   }

// }
