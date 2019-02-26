import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/blog/shared/services/post.service';
import { Post } from 'src/app/blog/shared/models/post';
import { PostDataService } from 'src/app/blog/shared/services/post-data.service';
import * as moment from 'moment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  filter: string;
  formControl;

  post: Post;
  key: string = '';
  postDate = moment().format('MMMM Do YYYY');

  constructor(
    private router: Router,
    private postService: PostService,
    private dataService: PostDataService
  ) { }

  ngOnInit() {
    this.post = new Post();
    this.dataService.currentPost.subscribe(data => {
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

  onSubmit() {
    if (this.key) {
      this.postService.updatePost(this.post, this.key)
      this.router.navigateByUrl('/init')
    } else {
      this.postService.createPost(this.post);
      this.router.navigateByUrl('/init')
    }
    this.post = new Post();
  }

}
