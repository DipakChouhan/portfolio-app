import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './components/about/about.component';
import {EducationComponent} from './components/education/education.component';
import {SkillsComponent} from './components/skills/skills.component';
import {ContactComponent} from './components/contact/contact.component';
import {HobbiesComponent} from './components/hobbies/hobbies.component';
import {ProjectsComponent} from './components/projects/projects.component';

const routes: Routes = [
  {path: '', component: HomeComponent, children: [
      {path: 'about', component: AboutComponent},
      {path: 'skills', component: SkillsComponent},
      {path: 'education', component: EducationComponent},
      {path: 'hobbies', component: HobbiesComponent},
      {path: 'contact', component: ContactComponent},
      {path: 'projects', component: ProjectsComponent},
    ]},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
