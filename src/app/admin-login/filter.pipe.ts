import { Pipe, PipeTransform } from '@angular/core';
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

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: data[], filterString: string): data[] {

    if (!items) return items;

    return items.filter(job =>

      job._id.toLocaleLowerCase().includes(filterString.toLocaleLowerCase())
    );

  }

}


// &&
//          job.country.toLocaleLowerCase().includes(countryString.toLocaleUpperCase()) &&
//          job.location.toLocaleLowerCase().includes(locationString.toLocaleLowerCase()) &&
//          job.category.toLocaleLowerCase().includes(categoryString.toLocaleLowerCase()) &&
//          job.country.toLocaleLowerCase().includes(countrystring.toLocaleLowerCase())