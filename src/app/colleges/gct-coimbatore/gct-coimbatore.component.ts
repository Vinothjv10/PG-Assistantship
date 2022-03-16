import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gct-coimbatore',
  templateUrl: './gct-coimbatore.component.html',
  styleUrls: ['./gct-coimbatore.component.css']
})
export class GctCoimbatoreComponent implements OnInit {

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
