import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BnkGirlListComponent } from './components/bnk-girl-list/bnk-girl-list.component';
import { BnkGirlComponent } from './components/bnk-girl/bnk-girl.component';
// import { HttpClient } from '../../node_modules/@types/selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Route } from '@angular/router';
import { InstagramComponent } from './components/instagram/instagram.component';
import { InstagramListComponent } from './components/instagram-list/instagram-list.component';
import { InstagramMemberComponent } from './components/instagram-member/instagram-member.component';
import { BnksuffixpipePipe } from './pipes/bnksuffixpipe.pipe';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './components/admin/admin.component';
import { EditbnkComponent } from './components/editbnk/editbnk.component';
const routers: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'instagram/:instagramId', component: InstagramComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'admin/editbnk/:id', component: EditbnkComponent }

];
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BnkGirlListComponent,
    BnkGirlComponent,
    InstagramComponent,
    InstagramListComponent,
    InstagramMemberComponent,
    BnksuffixpipePipe,
    LoginComponent,
    AdminComponent,
    EditbnkComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routers),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
