import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { BlogComponent } from './blog/components/blog/blog.component';
import { PostComponent } from './blog/components/post/post.component';
import { TagComponent } from './blog/components/tag/tag.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog/post/:id', component: PostComponent },
  { path: 'blog/tag/:tag', component: TagComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
