import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-form',
  templateUrl: './view-form.component.html',
  styleUrls: ['./view-form.component.css']
})
export class ViewFormComponent implements OnInit {

  @Input() name1: any;
  @Input() stud_name: any;
  @Input() tancet: any;
  @Input() gate: any;
  @Input() history_arrear: any;
  @Input() attendance: any;
  @Input() account_no: any;
  @Input() bank_name: any;
  @Input() ifsc_code: any;

  constructor() { }

  ngOnInit(): void {
  }

}
