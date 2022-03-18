import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-university-nagercoil',
  templateUrl: './university-nagercoil.component.html',
  styleUrls: ['./university-nagercoil.component.css']
})
export class UniversityNagercoilComponent implements OnInit {

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
