import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  toggleStyle: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  toggle() {
    this.toggleStyle = !this.toggleStyle;
  }
}
