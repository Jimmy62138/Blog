import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import { HttpClient } from '@angular/common/Http';
import {Post} from '../models/Post.model';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts: Post[] = [];
  postsSubject = new Subject<Post[]>();

  constructor(private httpClient: HttpClient) {
  }

  emitPosts() {
    this.postsSubject.next(this.posts);
  }

  getPosts() {
    firebase.database().ref('/posts').on('value', (data) => {
      this.posts = data.val() ? data.val() : [];
      this.emitPosts();
    });
  }

  savePosts() {
    firebase.database().ref('/posts').set(this.posts);
  }

  createNewPost(newPost: Post) {
    this.posts.push(newPost);
    this.savePosts();
    this.emitPosts();
  }


  removePost(post: Post) {
    const postIndexRemove = this.posts.findIndex(
      (postEl) => {
        if (postEl === post) {
          return true;
        }
      }
    );
    this.posts.splice(postIndexRemove, 1);
    this.savePosts();
    this.emitPosts();
  }

  loveIT(index: number) {
    this.posts[index].loveIts++;
    this.savePosts();
    this.emitPosts();
  }

  DontLoveIt(index: number) {
    this.posts[index].loveIts--;
    this.savePosts();
    this.emitPosts();
    }
}
