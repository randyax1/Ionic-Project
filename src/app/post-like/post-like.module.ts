import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostLikePageRoutingModule } from './post-like-routing.module';

import { PostLikePage } from './post-like.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostLikePageRoutingModule
  ],
  declarations: [PostLikePage]
})
export class PostLikePageModule {}
