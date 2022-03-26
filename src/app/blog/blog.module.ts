import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './components/blog/blog.component';
import { PostComponent } from './components/post/post.component';
import { MarkdownModule } from 'ngx-markdown';
import { PostMetaComponent } from './components/post-meta/post-meta.component';
import { MatCardModule } from '@angular/material/card';
import { TagComponent } from './components/tag/tag.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    BlogComponent,
    PostComponent,
    PostMetaComponent,
    TagComponent,
  ],
  imports: [
    CommonModule,
    MarkdownModule,
    MatCardModule,
    RouterModule,
  ]
})
export class BlogModule { }
