import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';
import { PagenotfoundComponent } from './login/pagenotfound/pagenotfound.component';
import { RegisterComponent } from './login/register/register.component';

const routes: Routes = [ 
  {path:'app', component:AppComponent },
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  // wildcard route
  //{path: '**', component: PagenotfoundComponent},
  //lazy loading
  {path:'login', loadChildren: () => import('./login/login.module').then(mod=>mod.LoginModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
