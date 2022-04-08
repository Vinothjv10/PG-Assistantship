import { Component, OnInit } from '@angular/core';

export interface data {
  academic: any,
  year: any,
  semester: any,
  branch: any,
  course: any,
  name: any,
  community_admitted: any,
  community_student: any,
  mode: any,
  score: any,
  account: any,
  bank: any,
  ifsc: any,
  phonenumber: any,
  email: any,
  arrear: any,
  attendance: any,
  remark: any,
  stipend: any,
  transition: any,
  date: any,
}


@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {

  datas: data[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
