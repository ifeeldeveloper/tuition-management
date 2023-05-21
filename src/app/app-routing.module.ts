import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './Components/log-in/log-in.component';
import { NgModule } from '@angular/core';
import { AuthGuardService } from './Service/authGuard.service';


const routes: Routes = [

  {
    path:'Home', loadChildren:()=>import('./Components/home/home.module').then(m=>m.HomeModule ), canActivate:[AuthGuardService]
  },
  {
    path:'', redirectTo:"login", pathMatch:'full'
  },
  {
    path:"login", component:LogInComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
