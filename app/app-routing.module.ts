import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './authentication/register/register.component';
import { LoginComponent } from './authentication/login/login.component';
import { GuardIsLoggedUser } from './guards/is-loggedIn.guard';
import { ProfileComponent } from './profile/profile.component'
import { ProfileSettingsComponent } from './profile/profile-settings/profile-settings.component'
import { OthersProfileComponent } from './profile/others-profile/others-profile.component';
//import { UserComponent } from './components/user/user.component';
//import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: '/posts', pathMatch: 'full' },
    { path: 'profile', canActivate: [GuardIsLoggedUser], component: ProfileComponent },
    { path: 'profile/edit', canActivate: [GuardIsLoggedUser], component: ProfileSettingsComponent },
    { path: 'home', component: HomeComponent },
    { path: 'user/:id', component: OthersProfileComponent }
    // { path: 'user', component: UserComponent },
    // { path: '', redirectTo: '/home', pathMatch: 'full' },
    // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }