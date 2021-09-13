import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],

exports: [RouterModule]
})
export class AppRoutingModule { }

