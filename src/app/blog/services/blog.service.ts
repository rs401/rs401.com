import { Injectable } from '@angular/core';
import { Post } from '../types/post.interface';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  posts: Post[] = [
    {
      id: 'ed9ec430-1fc1-495e-af42-4c18f77788fd',
      date: 'Thu Mar 24 2022',
      title: 'Using Angular for a Portfolio site (Part 1)',
      blurb: 'Getting familiar with Angular by revamping my Portfolio/Resume site.',
      file: 'one.md',
      tags: ['Angular', 'github api'],
    },
    // {
    //   id: 'ab75bd09-817e-457e-a771-7857d34ded4c',
    //   date: 'Fri Mar 25 2022',
    //   title: 'Second post',
    //   blurb: 'The Second post of potentially many.',
    //   file: 'two.md',
    //   tags: ['first tag', 'second tag'],
    // },
  ];

  constructor() { }

  getPosts() {
    return this.posts;
  }

  getPost(id: string): Post | undefined {
    return this.posts.find(post => post.id === id);
  }

  getPostsForTag(tag: string): Post[] {
    return this.posts.filter((post) => post.tags.includes(tag));
  }
}
