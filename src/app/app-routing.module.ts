import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FarmsComponent } from './farms/farms-list/farms.component';
import { PlotListComponent } from './plots/plot-list/plot-list.component';
import { ProductionListComponent } from './production/production-list/production-list.component';

const routes: Routes = [
  { path: 'farm-list', component: FarmsComponent },
  { path: 'plot-list', component: PlotListComponent },
  { path: 'production-list', component: ProductionListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
