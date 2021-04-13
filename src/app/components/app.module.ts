import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TeamComponent } from './team/team.component';

import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DonationsComponent } from './donations/donations.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { DownloadComponent } from './download/download.component';

const routes: Routes = [
  {path: 'team', component: TeamComponent},
  {path: 'home', component: HomeComponent},
  {path: 'donations', component: DonationsComponent},
  {path: '-', component: AppComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'download', component: DownloadComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    HomeComponent,
    DonationsComponent,
    ContactComponent,
    AboutComponent,
    DownloadComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
