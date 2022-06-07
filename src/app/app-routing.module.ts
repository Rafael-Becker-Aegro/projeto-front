import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FarmsComponent } from './farms/farms-list/farms.component';

const routes: Routes = [
  { path: 'farm-list', component: FarmsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
