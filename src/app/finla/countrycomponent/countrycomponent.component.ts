import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
//import { Country } from 'src/app/jayaraj/country-form/country-form.component';
import { StudentService } from 'src/app/shared/service/studentService';

@Component({
  selector: 'app-countrycomponent',
  templateUrl: './countrycomponent.component.html',
  styleUrls: ['./countrycomponent.component.scss']
})
export class CountrycomponentComponent implements OnInit {
  editMode:boolean=false;
  newReg:boolean=true;
  private destroy$: Subject<void> = new Subject<void>();

  countryGroup!: FormGroup;
  
  
  public newSaveSubscription!: Subscription;
  public getSubscription!: Subscription;
  public deleteSubscription!: Subscription;
  public updateSubscription!: Subscription;
  public CountryId!: string;
  public sortOrderSubscription!: Subscription;
  
  maxSortOrder = 1;
  
  
  
  //countryId: string;

  constructor(private fb: FormBuilder,private service: StudentService) { }
  
  countrylist: any;
  

  get  name() {
    return this.countryGroup.get('name') as FormControl;
  }

  get sortorder() {
    return this.countryGroup.get('sortorder') as FormControl;
  }

  ngOnInit(): void {
    this.countryGroup = this.fb.group({
      name: ['', Validators.required],
      sortorder: ['', Validators.required],
    });
    this.viewCountry();
    this.Sortnumorder();
    this.sortorder.setValue(this.maxSortOrder);
  }
  Sortnumorder() {
    this.sortOrderSubscription = this.service.SortOrder().subscribe(response => {
      let sortOrder=response;
      console.log(sortOrder);
      this.sortorder.setValue(sortOrder);
      console.log(response);
    });
  }
  viewCountry() {
    
    this.service.getCountry();
    const CountryId = this.countryGroup.value;
     this.getSubscription = this.service.getCountry().subscribe(response => {
         
      this.countrylist = response;
      console.log(this.countrylist);
  });
}
  onSave()
  {
    this.validatecountry();
    console.log(this.countryGroup);
    if (this.countryGroup.valid) 
    {
      if (this.editMode == false) {
      const form= this.countryGroup.value;
      console.log(form);
      this.newSaveSubscription = this.service.saveCountry(form).subscribe((response)=>{
      console.log(response);
      alert("Added Successfully");
      // this.countrylist=response;
      // console.log(this.countrylist);

      
      this.viewCountry();
      this.Sortnumorder();
      this.countryGroup.reset();
      });
      }
    else { 
      this.updateCountry();
      this.Sortnumorder();
      this.countryGroup.reset();
    }
  }
    else{
      alert("please enter the Student details");
    }
  }
  onReset()
  {
    this.newReg=true;
  
    this.countryGroup.reset();
    this.Sortnumorder();
  }
  myValue:any;

  updateCountry()
   { 
    let updateCt = this.countryGroup.value;
    console.log("updateCt",updateCt);
    this.updateSubscription = this.service.PatchCountry(this.CountryId, updateCt).subscribe(
      (response: any) => {
        this.viewCountry();
        alert("Updated successfully")
      });
    }
  

  editCountry(id:any) 
  {
    this.CountryId = id;
    console.log("id",id);
    this.editMode=true;
    this.getSubscription = this.service.EditCountry(id)
          .pipe(takeUntil(this.destroy$)).subscribe((response: any) => {
            console.log(response);
            this.countryGroup.get('name')?.patchValue(response[0]['name']);
            this.countryGroup.get('sortorder')?.patchValue(response[0]['sortOrder']);
    //this.name.setValue(response[0]['name']);
    //this.sortorder.setValue();
    

  });
  }
  deleteCountry(id: string) {

    if (confirm('Are you sure to delete this record ?'))
    {
      this.deleteSubscription = this.service.DeleteCountry(id).subscribe(response => {
     
        alert("Deleted Successfully");
        this.viewCountry();
      }); 
    }
  }
  validatecountry() {
        
    [
        { name: 'name' },
        { name: 'sortOrder' }
    ].forEach((control) => {
        this.countryGroup.get(control.name)?.markAsTouched();
    });
    console.log(this.validatecountry);
}

}  

