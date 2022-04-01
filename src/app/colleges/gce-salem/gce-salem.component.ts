import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gce-salem',
  templateUrl: './gce-salem.component.html',
  styleUrls: ['./gce-salem.component.css']
})
export class GceSalemComponent implements OnInit {

  toggleStyle: boolean = false;
  title = "Government college of Engineering and Technology, (Autonomous), Salem-636011";

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
