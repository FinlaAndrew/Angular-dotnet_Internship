import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }
  onfinlaclick() {
    this.router.navigate(['/studentclass']);
  }
  onReportclick() {
    this.router.navigate(['/studentreport']);
  }
  onSubjectclick(){
    this.router.navigate(['/subject']); 
  }
  onMKReportclick(){
    this.router.navigate(['/subjectreport']); 
  }
  onGotoHomeclick() {
    this.router.navigate(['/homepage']);
  }
  onallclick(){
    this.router.navigate(['/all']);
  }


}
