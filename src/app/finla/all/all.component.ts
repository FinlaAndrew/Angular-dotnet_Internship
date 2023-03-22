import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { StudentService } from 'src/app/shared/service/studentService';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {
  showmarkreportList: boolean=false;
  public marklist:Array<any>=[];
  private destroy$: Subject<void> = new Subject<void>();
  getSubscription: any;
  constructor(private service: StudentService) { }

  ngOnInit(): void {
    this.viewMSreport();
  }
  viewMSreport() {
    //debugger
    this.getSubscription = this.service.Subreport()
    .pipe(takeUntil(this.destroy$))
    .subscribe((response: any) => {
            console.log("123",response);
            this.marklist = response;
            console.log(this.marklist);
  });
  }

}
