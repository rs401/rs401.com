import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../../types/post.interface';

@Component({
  selector: 'app-post-meta',
  templateUrl: './post-meta.component.html',
  styleUrls: ['./post-meta.component.css']
})
export class PostMetaComponent implements OnInit {
  @Input() post!: Post;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigate() {
    this.router.navigateByUrl(`blog/post/${this.post.id}`);
  }

}
