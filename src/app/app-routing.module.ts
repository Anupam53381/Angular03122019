import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LOGINComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';


const routes: Routes = [
   { path: '', redirectTo: '/login',pathMatch:'full' },
  { path: 'login', component: LOGINComponent },
  { path: 'welcome/:name', component: WelcomeComponent },
  { path: '**', component: ErrorComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
