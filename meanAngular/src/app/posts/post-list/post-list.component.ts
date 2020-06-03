import { Component, OnInit ,Input} from '@angular/core';
import{Post} from '../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  @Input () posts : Post[]=[
    // {title:"First Post",content:"this is first post content"},
    // {title:"Second Post",content:"this is second post content"}, 
    // {title:"Thrid Post",content:"this is third post content"}
  ]

  constructor() { }

  ngOnInit() {
  }

}
