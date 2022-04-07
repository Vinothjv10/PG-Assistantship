import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export interface data {
  Name: any,
  account_no: any,
  attendance: any,
  bank_Name: any,
  branch: any,
  college: any,
  communalCategory: any,
  community_Admitted: any,
  courseName: any,
  createdAt: any,
  entry_Mode: any,
  gate: any,
  history_Arrear: any,
  ifsc_code: any,
  tancet: any,
  year: any
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
