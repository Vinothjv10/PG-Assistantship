import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-anna-university-tirunelveli',
  templateUrl: './anna-university-tirunelveli.component.html',
  styleUrls: ['./anna-university-tirunelveli.component.css']
})
export class AnnaUniversityTirunelveliComponent implements OnInit {

  title = "Anna University Regional Campus, Tirunelveli-627007"

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
