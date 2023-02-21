import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StudentFormComponent} from "./components/student-form/student-form.component";
import {StudentManagementComponent} from "./components/student-management/student-management.component";
import {StudentEditFormComponent} from "./components/student-edit-form/student-edit-form.component";

const routes: Routes = [{
  path: 'students', children: [
    {path: 'form', component: StudentFormComponent},
    {path: 'management', component: StudentManagementComponent},
    {path: 'edit-form', component: StudentEditFormComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule {
}
