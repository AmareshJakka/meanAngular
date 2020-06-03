import { Component, OnInit ,Input, OnDestroy} from '@angular/core';
import{Post} from '../post.model';
import { PostService } from '../post.service';
import{Subscription} from 'rxjs';



@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit ,OnDestroy{

  posts : Post[]=[
    // {title:"First Post",content:"this is first post content"},
    // {title:"Second Post",content:"this is second post content"}, 
    // {title:"Thrid Post",content:"this is third post content"}
  ]
  private postSub:Subscription;
  constructor(public postService:PostService) { }

  ngOnInit() {
    this.posts = this.postService.getPosts();
    this.postSub =this.postService.getPostUpdatedListener().subscribe((posts:Post[])=>{
      this.posts = posts;
      
    })
  }
  ngOnDestroy(){
    this.postSub.unsubscribe();
  }

}
