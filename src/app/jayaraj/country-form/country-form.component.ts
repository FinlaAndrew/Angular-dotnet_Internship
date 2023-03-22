// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
// import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';
// import { StudentService } from 'src/app/shared/service/studentService';

// @Component({
//   selector: 'app-country-form',
//   templateUrl: './country-form.component.html',
//   styleUrls: ['./country-form.component.scss']
// })
// export class CountryFormComponent implements OnInit {

//   newReg:boolean=true;


//   CountryFormGroup!: FormGroup;





//   constructor(private fb: FormBuilder,private service: StudentService ) { }

//   countrylist : any;



//   public CountryId!: string;


  
//   get  name() {
//     return this.CountryFormGroup.get('name') as FormControl;
//   }

//   get sortorder() {
//     return this.CountryFormGroup.get('sortorder') as FormControl;
//   }

//   public newSaveSubscription!: Subscription;
//   public getSubscription!: Subscription;
//   public deleteSubscription!: Subscription;

//   public patchSubscription!: Subscription;

 
//   public editMode: boolean = false;
   
//   public countryId!: string;

//   public sortOrderSubscription!: Subscription;

//   maxSortOrder = 1;
 

//   ngOnInit(): void {

  
   
   
//     this.CountryFormGroup = this.fb.group({
//       name: ['', Validators.required],
//       sortorder: ['', Validators.required],
     
      
      
     
//     });

  
//     this.viewCountry();
//    // this.sortorder.setValue(this.maxSortOrder);
//    this.SortOrder();
   
  
//   }


//   SortOrder() {
//     this.sortOrderSubscription = this.service.getSortOrder().subscribe(response => {
//       this.CountryFormGroup.setValue(response);
//     });
//   }

  

//   onSave()
//   {
//     const form= this.CountryFormGroup.value;
//     this.newSaveSubscription = this.service.saveCountryJay(form).subscribe((response)=>{
//       alert("Added Successfully");
//       this.countrylist=response;
//       console.log(this.countrylist);

//       this.CountryFormGroup.reset();
//       this.viewCountry();
//     });
    
     
//   }

//   viewCountry() {
//  console.log("45678");
//  this.service.getCountryJay();
//     // const CountryId = this.CountryFormGroup.value;
//     // this.getSubscription = this.service.getCountryJay().subscribe(
//     //     response => {
         
//     //       this.countrylist = response;
//     //       console.log(this.countrylist);

         


//     //     }
//     //   );
  
//   }





//   onReset()
//   {
//     this.newReg=true;
  
//     this.CountryFormGroup.reset();
   
//   }
//   myValue:any;

 
   

 

 
 
//   editCountry(country:Country)
//   {
//     this.name.setValue(country.name);
//     this.sortorder.setValue(country.sortOrder);

//     this.countryId = country.id;

//   }

    





 

//   deleteCountry(id: string) {

//     if (confirm('Are you sure to delete this record ?'))
//     {
//       this.deleteSubscription = this.service.DeleteCountryJay(id).subscribe(response => {
     
//         alert("Deleted Successfully");
//         this.viewCountry();

   
      
//     }); 
//     }
  
    
  
//   }

  

  

// }

// export class Country {  
//   id!: string;  
//  name!: string;  
//  sortOrder!:string;
   
// }  

