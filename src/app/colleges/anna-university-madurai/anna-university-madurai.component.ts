import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-anna-university-madurai',
  templateUrl: './anna-university-madurai.component.html',
  styleUrls: ['./anna-university-madurai.component.css']
})
export class AnnaUniversityMaduraiComponent implements OnInit {

  title = "Anna University Regional Campus, Madurai-625019"

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
  }

  toggle() {
    this.toggleStyle = !this.toggleStyle;
  }

}
