import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { WorkerProfileComponent } from './users/worker-profile/worker-profile.component';
import { UserProfileComponent } from './users/user-profile/user-profile.component';
import { UsersComponent } from './users/users.component';
import { RegisterAgentComponent } from './registeration/register-agent/register-agent.component';
import { RegisterUserComponent } from './registeration/register-user/register-user.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { RequestWorkerComponent } from './request-worker/request-worker.component';
import { RegisterAgent } from './shared/registerAgent.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SkillsApi } from './shared/skills.service';
import { JobsApi } from './shared/job.service';
import { UserApi } from './shared/user.service';
import { LoginComponent } from './login/login.component';
import { LoginApi } from './shared/login.service';
import { AuthInterceptor } from './auth/auth.interceptor';
import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './shared/auth.service';
import { AgentInfoService } from './shared/agentInfo.service';
import { SharingService } from './shared/data.service';
import { UserAgentOrderService } from './shared/checkUserAgentRequest.service';
import { EditWorkerProfileComponent } from './edit-worker-profile/edit-worker-profile.component';
import { ShareWorkerInfoService } from './shared/getWorkerInfoFromWorkerCompnent.service';
import { EditWorkerProfileService } from './shared/editWorkerProfile.service';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    WorkerProfileComponent,
    UserProfileComponent,
    UsersComponent,
    RegisterAgentComponent,
    RegisterUserComponent,
    RegisterationComponent,
    RequestWorkerComponent,
    LoginComponent,
    EditWorkerProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    NgMultiSelectDropDownModule.forRoot(),
  ],
  providers: [RegisterAgent , SkillsApi , JobsApi , UserApi ,
               LoginApi , AuthGuard , AuthService ,AgentInfoService,
               SharingService, UserAgentOrderService , ShareWorkerInfoService,
               EditWorkerProfileService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
