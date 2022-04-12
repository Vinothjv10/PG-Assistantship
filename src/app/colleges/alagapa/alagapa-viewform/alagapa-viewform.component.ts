import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';

export interface data {
  _id: any,
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
  selector: 'app-alagapa-viewform',
  templateUrl: './alagapa-viewform.component.html',
  styleUrls: ['./alagapa-viewform.component.css']
})
export class AlagapaViewformComponent implements OnInit {

  fileName = 'ExcelSheet.xlsx';

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

  printout(): void {
    /* pass here the table id */
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);
  }

}
