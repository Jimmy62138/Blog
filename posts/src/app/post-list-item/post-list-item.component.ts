import { Component, Input, OnInit } from '@angular/core';
import { PostsService} from '../services/posts.service';
import {Post} from '../models/Post.model';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

@Input() createdAt: Date;
@Input() titlePost: string;
@Input() contentPost: string;
@Input() loveIts: number;
@Input() index: number;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
  }

  onLike(index: number){
    this.postsService.loveIT(index);
  }
  onDislike(index: number){
    this.postsService.DontLoveIt(index);
  }

  onDeletePost(post: Post) {
    this.postsService.removePost(post);
    this.postsService.emitPosts();
    this.postsService.savePosts();
  }

}
