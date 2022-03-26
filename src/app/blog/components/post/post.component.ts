import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../types/post.interface';
import { MarkdownService } from 'ngx-markdown';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  
  md = '';
  obsMd?: Observable<string>;

  @Input() post!: Post;

  constructor(
    private http: HttpClient,
    private mdService: MarkdownService,
    private route: ActivatedRoute,
    private blogSvc: BlogService
    ) {
  }

  async ngOnInit() {
    let tmpPost = this.blogSvc.getPost(String(this.route.snapshot.paramMap.get('id')));
    if(tmpPost !== undefined) {
      this.post = tmpPost;
    }
    this.obsMd = this.http.get(`/assets/posts/${this.post.file}`, {
      responseType: 'text'
    });
    this.obsMd?.subscribe(text => {
      this.md = this.mdService.compile(text);
    });
  }

}
