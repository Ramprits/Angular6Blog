import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import { PostRoutingModule } from '@app/post/post.routing';

@NgModule({
  imports: [
    CommonModule,PostRoutingModule
  ],
  declarations: [PostComponent]
})
export class PostModule { }
