import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-act-chennai',
  templateUrl: './act-chennai.component.html',
  styleUrls: ['./act-chennai.component.css']
})
export class ActChennaiComponent implements OnInit {

  title = "University Departments of Anna University, ACT Campus,Guindy, Chennai-600025"

  toggleStyle: boolean = false;

  Next = false

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  details() {
    this.router.navigate(['details']);
  }
  nxtpage() {
    this.Next = true
    // this.router.navigate(['act-chennai']);
  }

  toggle() {
    this.toggleStyle = !this.toggleStyle;
  }

}
