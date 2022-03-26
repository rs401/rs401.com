import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { Post } from '../../types/post.interface';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  posts: Post[];

  constructor(private blogSvc: BlogService) {
    this.posts = this.blogSvc.getPosts();
  }

  ngOnInit(): void {
    this.posts.sort((a, b) => new Date(a.date) < new Date(b.date) ? 1:-1);
  }

}
