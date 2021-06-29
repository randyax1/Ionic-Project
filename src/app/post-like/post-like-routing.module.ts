import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostLikePage } from './post-like.page';

const routes: Routes = [
  {
    path: '',
    component: PostLikePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostLikePageRoutingModule {}
