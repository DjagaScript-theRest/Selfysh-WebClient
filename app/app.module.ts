import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AuthenticationModule } from './authentication/authentication.module';
import { AppComponent } from './app.component';
// import { HomeComponent } from './home/home.component'
import { AppRoutingModule } from './app-routing.module';
import { PostModule } from './posts/post.module';
import { CoreModule } from './core/core.module';
import { HttpHeadersService } from './services/http-headers.service'
import { UserService } from './services/user-service'
import { GuardIsLoggedUser } from './guards/is-loggedIn.guard';
import { ProfileModule } from './profile/profile.module'
@NgModule({
    declarations: [
        AppComponent,
        // HomeComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AuthenticationModule,
        AppRoutingModule,
        PostModule,
        CoreModule,
        ProfileModule
    ],
    providers: [
        HttpHeadersService,
        GuardIsLoggedUser,
        UserService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}