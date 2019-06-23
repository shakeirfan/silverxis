import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AssembleComponent} from './assemble/assemble.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
    // canActivate: [AuthGuard]
  },
  // {
  //   path: 'aaassemble',
  //   loadChildren: './assemble/assemble.module#AssembleModule',
  //   // canActivate: [AuthGuard]
  // },
  {
    path:'assemble',
    component:AssembleComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }


