import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ModalModule, ProgressbarModule, TimepickerModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProgressComponent } from './components/progress/progress.component';
import { SubmitRunComponent } from './components/submit-run/submit-run.component';
import { SubmissionHistoryComponent } from './components/submission-history/submission-history.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthenticationService } from './services/authentication.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ProgressComponent,
    SubmitRunComponent,
    SubmissionHistoryComponent,
    NavigationComponent,
    SignUpComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    /** NGX-BOOTSTRAP */
    ModalModule.forRoot(),
    ProgressbarModule.forRoot(),
    TimepickerModule.forRoot()
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent],
  entryComponents: [LoginComponent, SignUpComponent]
})
export class AppModule { }
