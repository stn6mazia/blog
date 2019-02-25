import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Post } from '../models/post';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private firebaseDb: AngularFireDatabase,
  ) { }

  getPosts() {
    return this.firebaseDb.list('posts')
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.sort().map(r => ({ key: r.payload.key, ...r.payload.val() })).reverse()
        })
      )
  }

  createPost(post: Post) {
    this.firebaseDb.list('posts').push(post)
  }

  updatePost(post: Post, key: string) {
    this.firebaseDb.list('posts').update(key, post)
      .catch((error: any) => {
        console.log(error);
      })
  }

  deletepost(key: string) {
    this.firebaseDb.list(`posts/${key}`).remove()
  }


}
