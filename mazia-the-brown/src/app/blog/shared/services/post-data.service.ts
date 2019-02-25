import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostDataService {
  private postSource = new BehaviorSubject({ post: null, key: '' });
  currentPost = this.postSource.asObservable();

  constructor() { }

  changePost(post: Post, key: string) {
    this.postSource.next({ post: post, key: key });
  }
}
