import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-university-pattukodai',
  templateUrl: './university-pattukodai.component.html',
  styleUrls: ['./university-pattukodai.component.css']
})
export class UniversityPattukodaiComponent implements OnInit {

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
