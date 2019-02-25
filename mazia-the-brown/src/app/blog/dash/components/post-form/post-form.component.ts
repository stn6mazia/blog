import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/blog/shared/services/post.service';
import { Post } from 'src/app/blog/shared/models/post';
import { PostDataService } from 'src/app/blog/shared/services/post-data.service';
import * as moment from 'moment';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  formControl;

  post: Post;
  key: string = '';
  postDate = moment().format('MMMM Do YYYY');

  constructor(
    private postService: PostService,
    private dataService: PostDataService
  ) { }

  ngOnInit() {
    this.post = new Post();
  }

  onSubmit() {
    this.postService.createPost(this.post);
    return this.post = new Post();
  }

}
