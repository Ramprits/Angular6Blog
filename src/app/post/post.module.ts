import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import { PostRoutingModule } from '@app/post/post.routing';
import { SharedModule } from '@app/shared';

@NgModule({
  imports: [
    CommonModule,PostRoutingModule , SharedModule
  ],
  declarations: [PostComponent]
})
export class PostModule { }
