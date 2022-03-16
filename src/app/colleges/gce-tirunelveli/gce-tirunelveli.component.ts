import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gce-tirunelveli',
  templateUrl: './gce-tirunelveli.component.html',
  styleUrls: ['./gce-tirunelveli.component.css']
})
export class GceTirunelveliComponent implements OnInit {

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
