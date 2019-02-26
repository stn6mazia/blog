import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/blog/shared/services/post.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { PostDataService } from 'src/app/blog/shared/services/post-data.service';
import { Post } from 'src/app/blog/shared/models/post';

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
  filter: string;
  post: Post;
  key: string = '';
  sumLike = 1;

  constructor(
    private router: Router,
    private postDataService: PostDataService,
    private postService: PostService
  ) { }

  ngOnInit() {
    this.filter = 'Sem Categoria'
    this.url = this.router.url.substring(0, 10)
    if (this.url === '/init/dash') {
      this.admin = true
    } else {
      this.admin = false
    }
    this.posts = this.postService.getPosts();

    this.editPost();
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

  editPost() {
    this.post = new Post();
    this.postDataService.currentPost.subscribe(data => {
      if (data.post && data.key) {
        this.key = data.key;
        this.post.title = data.post.title
        this.post.content = data.post.content
        this.post.author = data.post.author
        this.post.category = data.post.category
        this.post.postImage = data.post.postImage
        this.post.postDate = data.post.postDate
        this.post.likes = data.post.likes + 1
      }
    })
  }

  updatePoints(post: Post, key: string) {
    this.postService.updatePost(post, key)
  }

  edit(post: Post, key: string) {
    this.postDataService.changePost(post, key)
  }


}
