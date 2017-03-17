import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BusinessComponent } from './business/business.component';
import { OverviewComponent } from './overview/overview.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, data: {title: 'home'}
  }, {
    path: 'about', component: AboutComponent, data: {title: 'about'}
  }, {
    path: 'business', component: BusinessComponent, data: {title: 'business'}
  }, {
    path: 'contact', component: ContactComponent, data: {title: 'contact'}
  }, {
    path: 'overview', component: OverviewComponent, data: {title: 'overview'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
