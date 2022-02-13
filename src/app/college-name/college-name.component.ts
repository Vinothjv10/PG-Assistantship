import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-college-name',
  templateUrl: './college-name.component.html',
  styleUrls: ['./college-name.component.css']
})
export class CollegeNameComponent implements OnInit {

  Next = false

  constructor(public router: Router) { }

  ngOnInit(): void {
  }
  details() {
    this.router.navigate(['details']);
  }
  nxtpage() {
    this.Next = true
  }

}
