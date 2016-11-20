import {Routes, RouterModule} from "@angular/router";
import {MessagesComponent} from "./messages/messages.component";
import {AuthenticationComponent} from "./auth/authentication.component";
import {AUTH_ROUTES} from "./auth/auth.routes";
/**
 * Created by Mike on 20-11-2016.
 */

const APP_ROUTES: Routes = [
    { path: '', redirectTo:'/messages', pathMatch: 'full'},
    { path: 'messages', component: MessagesComponent},
    { path: 'auth', component: AuthenticationComponent, children: AUTH_ROUTES}
];

export const routing = RouterModule.forRoot(APP_ROUTES);