import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alagapa',
  templateUrl: './alagapa.component.html',
  styleUrls: ['./alagapa.component.css']
})
export class AlagapaComponent implements OnInit {

  title = "Alagappa Chettair Government College of Engineering and Technology, (Autonomous)"

  toggleStyle: boolean = false;

  Next = false

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  details() {
    this.router.navigate(['details']);
  }
  nxtpage() {
    // this.Next = true
    // this.router.navigate([''])
  }

  toggle() {
    this.toggleStyle = !this.toggleStyle;
  }

}
