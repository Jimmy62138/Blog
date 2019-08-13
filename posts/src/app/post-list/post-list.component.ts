import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

@Input() created_at: Date;
@Input() titlePost: string;
@Input() contentPost: string;
@Input() loveIts: number;

  constructor() { }

  ngOnInit() {
  }
  
    onLike(){
  this.loveIts++;
  }  
  onDislike(){
  this.loveIts--;
  }

}
