import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserProfileComponent } from './users/user-profile/user-profile.component';
import { WorkerProfileComponent } from './users/worker-profile/worker-profile.component';
import { RegisterUserComponent } from './registeration/register-user/register-user.component';
import { RegisterAgentComponent } from './registeration/register-agent/register-agent.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { RequestWorkerComponent } from './request-worker/request-worker.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { EditWorkerProfileComponent } from './edit-worker-profile/edit-worker-profile.component';


export const appRoutes: Routes = [
    {path: '' , component : LoginComponent},
    {
        path: 'user' , component: UsersComponent, canActivate:[AuthGuard] ,
        children: [{path: '' , component: UserProfileComponent }]
    },
    {
        path: 'worker' , component: UsersComponent, canActivate:[AuthGuard] ,
        children: [{path: '' , component: WorkerProfileComponent}]
    },

    {
        path: 'registerUser' , component: RegisterationComponent, 
        children: [{path: '' , component: RegisterUserComponent }]
    },
    {
        path: 'registerAgent' , component: RegisterationComponent,
        children: [{path: '' , component: RegisterAgentComponent}]
    },

    {
        path: 'order' , component: RequestWorkerComponent , canActivate:[AuthGuard]
    },

    {
        path: 'editProfile' , component: EditWorkerProfileComponent , canActivate:[AuthGuard]
    }
]