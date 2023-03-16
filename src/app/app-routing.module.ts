import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from "./about/about.component";
import {EducationComponent} from "./education/education.component";
import {InterestsComponent} from "./interests/interests.component";
import {ProjectsComponent} from './projects/projects.component';

const routes: Routes = [
  {path: 'about', component: AboutComponent },
  {path: 'education', component: EducationComponent},
  {path: 'interests', component: InterestsComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: '', redirectTo: '/about', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
