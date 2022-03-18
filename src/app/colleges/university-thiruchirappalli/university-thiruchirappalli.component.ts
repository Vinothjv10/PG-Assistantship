import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-university-thiruchirappalli',
  templateUrl: './university-thiruchirappalli.component.html',
  styleUrls: ['./university-thiruchirappalli.component.css']
})
export class UniversityThiruchirappalliComponent implements OnInit {

  toggleStyle: boolean = false;
  Next = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  details() {
    this.router.navigate(['details']);
  }
  nxtpage() {
    this.Next = true
  }

  toggle() {
    this.toggleStyle = !this.toggleStyle;
  }
}
