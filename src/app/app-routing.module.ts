import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollegeNameComponent } from './college-name/college-name.component';
import { DetailsFormComponent } from './details-form/details-form.component';

const routes: Routes = [
  // {
  //   path: 'college',
  //   children: [

  //     { path: '', component: CollegeNameComponent },
  //     { path: 'details', component: DetailsFormComponent },

  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
