import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/blog/shared/services/post.service';
import { Observable } from 'rxjs';
import { Key } from 'protractor';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  posts: Observable<any>;
  liked: boolean = false;

  constructor(private postService: PostService) { }

  ngOnInit() {
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
