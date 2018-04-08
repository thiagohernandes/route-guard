import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login/login/login.component';
import { OkComponent } from './pages/ok/ok.component';
import { DeniedComponent } from './pages/denied/denied.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AUTH_PROVIDERS } from './services/auth.service';
import { LoggedInGuardService } from './services/logged-in-guard.service';

const appRoutes: Routes = [
  {
    path: 'app-login',
    component: LoginComponent
  },
  {
    path: 'app-login/:msg',
    component: LoginComponent
  },
  {
    path: 'app-ok',
    component: OkComponent
  },
  {
    path: 'app-denied',
    component: DeniedComponent,
    canActivate: [LoggedInGuardService]
  },
  { 
    path: '',redirectTo: '/app-login',pathMatch: 'full'
  },
  { path: '**', component: NotFoundComponent }  
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OkComponent,
    DeniedComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [
    LoggedInGuardService,
    AUTH_PROVIDERS
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
