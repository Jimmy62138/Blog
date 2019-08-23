import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {PostsService} from '../services/posts.service';
import {Post} from '../models/Post.model';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  newPostForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private postsService: PostsService, private router: Router) {
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.newPostForm = this.formBuilder.group({
      titre: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  onSavePost() {
    const titre = this.newPostForm.get('titre').value;
    const content = this.newPostForm.get('content').value;
    const loveIts = 0;
    const createdAt =  new Date().toDateString();
    const newPost = new Post(titre, content, loveIts, createdAt);
    this.postsService.createNewPost(newPost);
    this.router.navigate(['/posts']);
  }

}


