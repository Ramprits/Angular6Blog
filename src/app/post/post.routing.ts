import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { extract } from "@app/core";
import { PostComponent } from "./post.component";

const routes: Routes = [{ path: "", component: PostComponent, data: { title: extract("Post") } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class PostRoutingModule {}
