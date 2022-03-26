import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  public repos: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // This should be in a service but we are only making one API call
    if (
      // Check if we have the repos local
      localStorage.getItem('repos') !== undefined &&
      localStorage.getItem('repos') !== null
    ) {
      // We have the repos local
      // Check how old the local version is
      let exp = Number(localStorage.getItem('repos_exp'));
      if (exp > Date.now()) {
        // Repos are less than 2 hours old
        this.repos = JSON.parse(localStorage.getItem('repos')!);
        return;
      }
      localStorage.removeItem('repos_exp');
      localStorage.removeItem('repos');
    }
    this.http
      .get<any>('https://api.github.com/users/rs401/repos', {
        observe: 'response',
      })
      .subscribe({
        next: (response) => {
          this.repos = response.body;
          // Sort repos by 'pushed_at'
          this.repos.sort((a, b) => (a['pushed_at'] > b['pushed_at'] ? -1 : 1));
        },
        complete: () => {
          // This is needed to avoid Github's API limits during live reloads on
          // save during development.
          localStorage.setItem('repos', JSON.stringify(this.repos));
          let date = Date.now();
          let exp = date + 2 * (60 * 60 * 1000);
          localStorage.setItem('repos_exp', String(exp));
          console.log('repos_exp: ' + localStorage.getItem('repos_exp'));
        },
      });
  }
}
