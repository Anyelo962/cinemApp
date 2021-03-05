import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListTicketsPage } from './list-tickets.page';

const routes: Routes = [
  {
    path: '',
    component: ListTicketsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListTicketsPageRoutingModule {}
