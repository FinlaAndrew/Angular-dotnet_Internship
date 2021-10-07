import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-initial-form-load',
  templateUrl: './initial-form-load.component.html',
  styleUrls: ['./initial-form-load.component.scss']
})
export class InitialFormLoadComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {

  }

  onsandraclick() {
    this.router.navigate(['/studentdemo']);
  }
}
