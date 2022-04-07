import { HttpClient } from '@angular/common/http';
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

}

@Component({
  selector: 'app-gce-salem-viewform',
  templateUrl: './gce-salem-viewform.component.html',
  styleUrls: ['./gce-salem-viewform.component.css']
})
export class GceSalemViewformComponent implements OnInit {

  datas: data[] = []

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getdatas();
  }

  getdatas() {
    this.http.get<any>('http://localhost:3100/api/users').subscribe(
      response => {
        console.log(response);
        this.datas = response;
      }
    );
  }

  printout() {

  }
}
