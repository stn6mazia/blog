import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/blog/shared/services/post.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  posts: Observable<any>;
  liked: boolean = false;
  url;
  admin = false;

  constructor(
    private router: Router,
    private postService: PostService
  ) { }

  ngOnInit() {
    this.url = this.router.url.substring(0, 10)
    if (this.url === '/init/dash') {
      this.admin = true
    } else {
      this.admin = false
    }
    this.posts = this.postService.getPosts();
  }

  likeitem() {
    this.liked = true;
  }

  unlikeitem() {
    this.liked = false;
  }

  deletePost(key: string) {
    this.postService.deletepost(key)
  }

}
