import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {ContactComponent} from './contact/contact.component'
import {ProjectsComponent} from './projects/projects.component'
import {AboutComponent} from './about/about.component'

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"contact-me",component:ContactComponent},
  {path:"contact-us",component:ContactComponent},
  {path:"projects",component:ProjectsComponent},
  {path:"about-me",component:AboutComponent},
  {path:"",component:HomeComponent},
  {path:"**",component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
