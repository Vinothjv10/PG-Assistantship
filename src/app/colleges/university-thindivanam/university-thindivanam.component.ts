import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-university-thindivanam',
  templateUrl: './university-thindivanam.component.html',
  styleUrls: ['./university-thindivanam.component.css']
})
export class UniversityThindivanamComponent implements OnInit {

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
