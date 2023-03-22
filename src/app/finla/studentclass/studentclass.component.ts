import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { StudentService } from 'src/app/shared/service/studentService';
import { CountrycomponentComponent } from '../countrycomponent/countrycomponent.component';

@Component({
  selector: 'app-studentclass',
  templateUrl: './studentclass.component.html',
  styleUrls: ['./studentclass.component.scss']
})
export class StudentclassComponent implements OnInit {
onGotoHomeclick() {
throw new Error('Method not implemented.');
}
  editMode:boolean=false;
  newReg:boolean=true;
  private destroy$: Subject<void> = new Subject<void>();

  public dateob:any;
  public saveSubscription!: Subscription;
  public viewSubscription!: Subscription;
  public getSubscription!: Subscription;
  public updateSubscription!: Subscription;
  public deleteSubscription!: Subscription;
  public studentlist:Array<any>=[];
  public getcountrySubscription!: Subscription;
  public contactFormGroup!: FormGroup;
  contacts:Array<any>=[];

  countrylist: any;
  // contacts=[
  //   // {name:'Ram',place:'Srinagar',dob:'23',gender:'1',indian:'true',email:'ram@gmil.com',country:'India',mobno:'1234567899'},
  //   // {name:'Anu',place:'Ollur',dob:'22',gender:'2',indian:'false',email:'auroraw@gmil.com',country:'Canada',mobno:'1287567899'},
  //   // {name:'Lyka',place:'Kodungallur',dob:'24',gender:'2',indian:'true',email:'fathima@gmil.com',country:'India',mobno:'9934567899'},
  //   // {name:'Alen',place:'Wayanad',dob:'20',gender:'2',indian:'true',email:'alenbmw@gmil.com',country:'India',mobno:'9876567899'}
  // ]
  countryname=[
    {name:'Argentina'},
    {name:'Belgium'},
    {name:'Canada'},
    {name:'Columbia'},
    {name:'France'},
    {name:'Greece'},
    {name:'India'}
  ]
  // genderlabel=[
  //   {label:'Male'},
  //   {label:'Female'},
  //   {label:'Transgender'}
  // ]
  router: any;
  spinner: any;
  itemId: any;
  studentFillForm: any;
  list: any;
 
 

  constructor(private fb:FormBuilder,private service:StudentService,private dialog:MatDialog) {}
  get firstname() {
    return this.contactFormGroup.get('firstname') as FormControl;
  }
  get lastname() {
    return this.contactFormGroup.get('lastname') as FormControl;
  }
  get email() {
    return this.contactFormGroup.get('email') as FormControl;
  }
  get dob() {
    return this.contactFormGroup.get('dob') as FormControl;
  }
  get age() {
    return this.contactFormGroup.get('age') as FormControl;
  }
  get gender() {
    return this.contactFormGroup.get('gender') as FormControl;
  }
  get indian() {
    return this.contactFormGroup.get('indian') as FormControl;
  }
  get place() {
    return this.contactFormGroup.get('place') as FormControl;
  }
  get country() {
    return this.contactFormGroup.get('country') as FormControl;
  }
  get mobno() {
    return this.contactFormGroup.get('mobno') as FormControl;
  }

  ngOnInit(): void {
    

    this.contactFormGroup = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: [null],
      dob: [null],
      age: [null],
      gender: [null],
      indian: [true],
      place: [null],
      country: [null],
      mobno: ['', Validators.required]
    }
    
    );
    console.log("finla")
    
    this.getCountrydata();
    this.onView();
    //this.country.setValue(this.countrylist);
  }
  // onGotoHomeclick()
  //  {
  //       this.router.navigate(['/homepage']);
  //   }
  getCountrydata() {
    this.getcountrySubscription = this.service.getCountry().pipe(takeUntil(this.destroy$)).subscribe((response: any) => {
            console.log(response);
            this.countrylist = response;
            console.log(this.countrylist);
  });
  }
  
  CalculateAge()
  {
    var date=this.contactFormGroup.get('dob')?.value;
    console.log(date);
    if (date) {
      var timeDiff = Math.abs(Date.now() - new Date(date).getTime());
      this.dateob = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
      console.log(this.dateob);
      this.age.setValue(this.dateob);
      }
    
      
  }
  openCountryComponent() {
        const dialogConfig =new MatDialogConfig();
        dialogConfig.autoFocus=true;
    
        this.dialog.open(CountrycomponentComponent) 
        }
    
  onReset(){
      this.newReg=true;
      this.contactFormGroup.reset();
      this.gender.setValue('Male');
      this.place.setValue('');
  }

  onView(){
    this.viewSubscription = this.service.viewData1()
          .pipe(takeUntil(this.destroy$))
          .subscribe((response: any) => {
            // console.log("res",response);
            this.studentlist=response;
            console.log(response);
              // this.sectionList = response['sections'];
              // this.courseList = response['courses'];
          });
  }
  editStudent(id: any) {
    this.itemId=id;
    this.editMode=true;
    this.getSubscription = this.service.getStudentData(id)
          .pipe(takeUntil(this.destroy$))
          .subscribe((response: any) => {
            console.log(response);
            console.log("res",response[0]['firstname']);
            // this.studentlist=response;
             //this.contactFormGroup.patchValue(response);
            // this.contactFormGroup.patchValue({firstname: response['firstName']});
              // this.sectionList = response['sections'];
              // this.courseList = response['courses'];
               this.contactFormGroup.get('firstname')?.patchValue(response[0]['firstname']);
               this.contactFormGroup.get('lastname')?.patchValue(response[0]['lastname']);
               this.contactFormGroup.get('email')?.patchValue(response[0]['email']);
               this.contactFormGroup.get('dob')?.patchValue(response[0]['dob']);
               this.contactFormGroup.get('age')?.patchValue(response[0]['age']);
               this.contactFormGroup.get('gender')?.patchValue(response[0]['gender']);
               this.contactFormGroup.get('mobno')?.patchValue(response[0]['mobno']);
               this.contactFormGroup.get('place')?.patchValue(response[0]['place']);
               this.contactFormGroup.get('country')?.patchValue(response[0]['countryId']);
               this.contactFormGroup.get('indian')?.patchValue(response[0]['indian']);
          });
  }
  deleteStudent(id: any) {
    this.deleteSubscription = this.service.delStudentData(id).subscribe
      ((response: any) => {
        this.list = response;
        alert("Deleted successfully")
        this.onView();
      });

  }
  updateStudent() { 
    let updateSt = this.contactFormGroup.value;
    console.log("updateSt",updateSt);
    this.updateSubscription = this.service.updateStudentdata(this.itemId, updateSt).subscribe(
      (response: any) => {
        this.onView();
        alert("Updated successfully")
        //this.reset();
      });
  }

  onSave() { 
    //debugger;
    //this.validateForm();
    // this.findInvalidControls();
    this.validatestudent();
    console.log(this.contactFormGroup);
    if (this.contactFormGroup.valid) 
    {
      
  
      if (this.editMode == false) {
        let savest = this.contactFormGroup.value;
        console.log(savest);
        this.saveSubscription = this.service.dataSave(savest).subscribe(
          (response: any) => {
            console.log(response);
            this.onView();
            alert("Saved successfully");
            this.contactFormGroup.reset();

            //this.reset();
          });
        }
        else { 
          this.updateStudent();
          this.contactFormGroup.reset();
        }
      }
      
    else{
        
        //this.validateForm();
        alert("please enter the Student details");
      }
  }
  // validateForm(){
  //     if(this.contactFormGroup.get('firstname')?.value == null ||    this.contactFormGroup.get('lastname')?.value == null ||       this.contactFormGroup.get('mobno')?.value == null){
  //       return false;
  //     }
  //  else{
  //   return true;
  //  }

  //   }
  //   public validate(): void {
      
  //     if (this.contactFormGroup.invalid) {
  //       for (const control of Object.keys(this.contactFormGroup.controls)) {
  //         this.contactFormGroup.controls[control].markAllAsTouched();
  //       }
  //       return;
  //     }
  //   }

      validatestudent() {
        
        [
            { name: 'firstname' },
            { name: 'lastname' },
            { name: 'mobno' },
            { name: 'email' },
            { name: 'dob' },
            { name: 'age' },
            { name: 'gender' },
            { name: 'place' },
            { name: 'country' },
            { name: 'indian' }
           
  
        ].forEach((control) => {
            this.contactFormGroup.get(control.name)?.markAsTouched();
        });
        console.log(this.validatestudent);
    }
  
    }

    
      
    
      



