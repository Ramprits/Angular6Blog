import { Component, OnInit } from "@angular/core";
import { PostService } from "@app/post/post.service";
import { Post } from "@app/post/post.model";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.scss"],
  preserveWhitespaces:true
})
export class PostComponent implements OnInit {
  posts: Post[];
  isLoading:boolean;
  constructor(private postService: PostService) {}

  ngOnInit() {
    this.isLoading = true;
    setTimeout(() => {
      this.postService.getPosts().subscribe(post => {
        this.posts = post;
        this.isLoading = false;
      });
    }, 2000);
  }
}
