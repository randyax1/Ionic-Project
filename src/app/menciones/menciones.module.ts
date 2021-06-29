import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MencionesPageRoutingModule } from './menciones-routing.module';

import { MencionesPage } from './menciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MencionesPageRoutingModule
  ],
  declarations: [MencionesPage]
})
export class MencionesPageModule {}
