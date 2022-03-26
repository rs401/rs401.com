import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../services/blog.service';
import { Post } from '../../types/post.interface';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {

  posts: Post[];
  tag: string;

  constructor(private blogSvc: BlogService, private route: ActivatedRoute) {
    this.tag = String(this.route.snapshot.paramMap.get('tag'));
    this.posts = this.blogSvc.getPostsForTag(this.tag);
  }

  ngOnInit(): void {
  }

}
