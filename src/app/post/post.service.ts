import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of, BehaviorSubject } from "rxjs";
import { Post } from "@app/post/post.model";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class PostService {
  posts: Post[];
  private selectedPostSource = new BehaviorSubject<Post | null>(null);
  selectedPostChanges$ = this.selectedPostSource.asObservable();

  constructor(private httpClient: HttpClient) {}

  changeSelectedPost(selectedpost: Post | null): void {
    this.selectedPostSource.next(selectedpost);
  }

  getPosts(): Observable<Post[]> {
    if (this.posts) {
      console.log("cached !!!");
      return of(this.posts);
    }
    return this.httpClient.get<Post[]>(`/api/posts/`).pipe(
      tap(data => {
        this.posts = data;
      })
    );
  }

  getPost(id: number): Observable<Post> {
    if (id === 0) {
      return of(this.InitializePost());
    }
    if (this.posts) {
      const foundItem = this.posts.find(item => item.id === id);
      if (foundItem) {
        return of(foundItem);
      }
    }
    return this.httpClient.get<Post>(`/api/posts/` + `${id}`).pipe(
      tap(data => {
        console.log("Data => " + JSON.stringify(data));
      })
    );
  }

  private InitializePost(): Post {
    return {
      id: 0,
      title: "",
      name: "",
      created: Date()
    };
  }
}
