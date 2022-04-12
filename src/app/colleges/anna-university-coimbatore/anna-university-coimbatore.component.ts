import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-anna-university-coimbatore',
  templateUrl: './anna-university-coimbatore.component.html',
  styleUrls: ['./anna-university-coimbatore.component.css']
})
export class AnnaUniversityCoimbatoreComponent implements OnInit {

  title = " Anna University Regional Campus, Coimbatore-641046"

  toggleStyle: boolean = false;

  Next = false

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  details() {
    this.router.navigate(['details']);
  }


  toggle() {
    this.toggleStyle = !this.toggleStyle;
  }

}
