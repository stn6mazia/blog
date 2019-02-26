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
    console.log(this.filter)
    this.post = new Post();
  }

  onSubmit() {
    this.postService.createPost(this.post);
    this.post = new Post();
    this.router.navigateByUrl('/init')
  }

}
