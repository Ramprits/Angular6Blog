import { Component, OnInit } from "@angular/core";
import { PostService } from "@app/post/post.service";
import { Post } from "@app/post/post.model";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.scss"]
})
export class PostComponent implements OnInit {
  posts: Post[];
  constructor(private postService: PostService) {}

  ngOnInit() {
    setTimeout(() => {
      this.postService.getPosts().subscribe(post => {
        this.posts = post;
      });
    }, 100);
  }
}
