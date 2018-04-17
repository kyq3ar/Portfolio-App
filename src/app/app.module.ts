import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ProjectComponent } from './project/project.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { ResumepageComponent } from './resumepage/resumepage.component';

const appRoutes: Routes = [
  {
    path: '', 
    component: HomepageComponent
  },
  {
    path: 'project/:projectId',
    component: ProjectComponent
  },
  {
    path: 'about',
    component: AboutpageComponent
  },
  {
    path: 'resume',
    component: ResumepageComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    FooterComponent,
    HeaderComponent,
    ProjectComponent,
    AboutpageComponent,
    ResumepageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor() {}
}
