import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gce-salem',
  templateUrl: './gce-salem.component.html',
  styleUrls: ['./gce-salem.component.css']
})
export class GceSalemComponent implements OnInit {

  courses = [
    { names: 'M.E - Applied Electronics' },
    { names: 'M.E - Computer Science and Engineering' },
    { names: 'M.E - Engineering Design' },
    { names: 'M.E - Geo Technical Engineering' },
    { names: 'M.E - Environmental Engineering' },
    { names: 'M.E - Manufacturing Engineering' },
    { names: 'M.E - Power Electronics & Drives' },
    { names: 'M.E - Power Systems Engineering' },
    { names: 'M.E - Structural Engineering' },
    { names: 'M.E - Thermal Engineering' },
    { names: 'M.E - VLSI Design' },
  ]

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
    // this.Next = true
    // this.router.navigate(['/gce-salem-detail'])
  }

  toggle() {
    this.toggleStyle = !this.toggleStyle;
  }

}
