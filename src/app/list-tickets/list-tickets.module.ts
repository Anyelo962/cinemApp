import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListTicketsPageRoutingModule } from './list-tickets-routing.module';

import { ListTicketsPage } from './list-tickets.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListTicketsPageRoutingModule
  ],
  declarations: [ListTicketsPage]
})
export class ListTicketsPageModule {}
