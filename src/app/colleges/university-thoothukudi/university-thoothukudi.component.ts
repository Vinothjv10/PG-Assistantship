import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-university-thoothukudi',
  templateUrl: './university-thoothukudi.component.html',
  styleUrls: ['./university-thoothukudi.component.css']
})
export class UniversityThoothukudiComponent implements OnInit {

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
