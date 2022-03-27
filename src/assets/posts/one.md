# Using Angular for a Portfolio site (Part 1)

While using Angular for a side project, I realized I should play with Angular a little more to decide if it will be used in future projects.

## Create an Angular portfolio

First you will need the Angular CLI installed:

```bash
npm install -g @angular/cli
```

Check AngularCLI is installed:

```bash
ng version
```

Should yield results similar to:

```bash
blackbeard@btr:~ » ng version

     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/


Angular CLI: 13.3.0
Node: 16.14.2
Package Manager: npm 8.5.0
OS: linux x64

Angular:
...

Package                      Version
------------------------------------------------------
@angular-devkit/architect    0.1303.0 (cli-only)
@angular-devkit/core         13.3.0 (cli-only)
@angular-devkit/schematics   13.3.0 (cli-only)
@schematics/angular          13.3.0 (cli-only)
```

Create your project:

```bash
ng new myportfolio
```

Answer yes to routing and choose your preferred css style.

### Optional setup

If you would like to use Material components you will need to add AngularMaterial to your project.

First change directory to your project:

```bash
cd myportfolio
```

Then install Material:

```bash
ng add @angular/material
```

You can choose from [prebuilt material design themes](https://material.angular.io/guide/theming#using-a-pre-built-theme) or set up an extensible [custom theme](https://material.angular.io/guide/theming#defining-a-theme).

Choose whether you would like to set up global Angular Material typography styles.

Choose whether you would like to set up browser animations for Angular Material.

For further help setting up Angular Material please see ["Getting Started with Angular Material"](https://material.angular.io/guide/getting-started) guide.

## Generate components

I chose to have:

- a `header` component that holds my profile image and blurb about myself
- a `about` component that holds a cover letter version of information about me
- a `projects` component to hold a list of projects from my [github account](https://github.com/rs401)
  - a `project` component to display information about a specific project repository

```bash
ng g component components/header
ng g component components/about
ng g component components/projects
ng g component components/project
```
&nbsp;  
Which should result in a directory structure as such:
&nbsp;  

```bash
src
├── app
│   ├── app.component.css
│   ├── app.component.html
│   ├── app.component.spec.ts
│   ├── app.component.ts
│   ├── app.module.ts
│   ├── app-routing.module.ts
│   └── components
│       ├── about
│       │   ├── about.component.css
│       │   ├── about.component.html
│       │   ├── about.component.spec.ts
│       │   └── about.component.ts
│       ├── header
│       │   ├── header.component.css
│       │   ├── header.component.html
│       │   ├── header.component.spec.ts
│       │   └── header.component.ts
│       ├── project
│       │   ├── project.component.css
│       │   ├── project.component.html
│       │   ├── project.component.spec.ts
│       │   └── project.component.ts
│       └── projects
│           ├── projects.component.css
│           ├── projects.component.html
│           ├── projects.component.spec.ts
│           └── projects.component.ts
├── assets
└── environments
```

&nbsp;  
First I added a Material toolbar and menu along with the Angular router-outlet to app.component.html.

app.component.html

```html
<!-- Toolbar -->
<mat-toolbar color="primary" class="position-fixed">
  <button mat-icon-button aria-label="Menu" [matMenuTriggerFor]="menu">
    <mat-icon>menu</mat-icon>
  </button>
  <mat-menu #menu="matMenu">
    <button routerLink="/" mat-menu-item>Home</button>
    <!-- More about this 👇 in the next post -->
    <button routerLink="/blog" mat-menu-item>Blog</button>
  </mat-menu>
  <span routerLink="/">RS401</span>
  <span class="spacer"></span>
  <a href="https://github.com/rs401/" target="_blank">
    <button mat-icon-button aria-label="Github button">
      <img src="assets/img/icons8-github.svg" alt="Github" />
    </button>
  </a>
  <a
    href="https://www.linkedin.com/in/richard-stadnick-3b4ab53b/"
    target="_blank"
  >
    <button mat-icon-button class="example-icon" aria-label="Linkedin button">
      <img src="assets/img/icons8-linkedin.svg" alt="Linkedin" />
    </button>
  </a>
</mat-toolbar>
<!-- END Toolbar -->

<!-- content -->
<div class="container">
  <router-outlet></router-outlet>
</div>
```

I then added my desired content to `about.component.html` and `header.component.html`. The next thing to do would be to query [Github's API](https://docs.github.com/en/rest) and retrieve information about my repositories.

Now I want to call github, get the information about my repositories and store them in an iterable container. I then want to loop over the repos and display a little meta data in a mat-card that links to the respective repo. Normally you would create a service abstraction for the API calls, but I'm making one call to retrieve a single set of data once. Now that I'm hearing the words "out loud", I've decided to separate the API call in a "Refactor" post. (Look at me planning content 😅)

projects.component.ts

```typescript
import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.css"],
})
export class ProjectsComponent implements OnInit {
  public repos: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // This should be in a service but we are only making one API call
    this.http
      .get<any>("https://api.github.com/users/rs401/repos", {
        observe: "response",
      })
      .subscribe({
        next: (response) => {
          this.repos = response.body;
          // Sort repos by 'pushed_at'
          this.repos.sort((a, b) => (a["pushed_at"] > b["pushed_at"] ? -1 : 1));
        },
      });
  }
}
```

So the first thing you'll notice is that we receive angular's HttpClient through dependency injection (you will need to add `HttpClientModule` to app.module.ts 'imports')

```typescript
@NgModule({
  ...
  imports: [
    AppRoutingModule,
    HttpClientModule,
    ...
  ],
  ...
})
```

I also declared an array of any to hold the repositories. In `ngOnInit()`, I make a call to the Github API, load the API response body into the aforementioned array, then I sort the repositories by the `pushed_at` property.

While working on the styles, I experienced a 'limits' rejection. Angular's dev server live reloads, which caused the component to call the API every time I saved a file. To avoid this I decided to store the repository information in `localstorage` and only call the API if the data is older than 2 hours. Here is how I achieved this.

projects.component.ts

```diff
import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.css"],
})
export class ProjectsComponent implements OnInit {
  public repos: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // This should be in a service but we are only making one API call
+    if (
+      // Check if we have the repos local
+      localStorage.getItem("repos") !== undefined &&
+      localStorage.getItem("repos") !== null
+    ) {
+      // We have the repos local
+      // Check how old the local version is
+      let exp = Number(localStorage.getItem("repos_exp"));
+      if (exp > Date.now()) {
+        // Repos are less than 2 hours old
+        this.repos = JSON.parse(localStorage.getItem("repos")!);
+        return;
+      }
+      localStorage.removeItem("repos_exp");
+      localStorage.removeItem("repos");
+    }
    this.http
      .get<any>("https://api.github.com/users/rs401/repos", {
        observe: "response",
      })
      .subscribe({
        next: (response) => {
          this.repos = response.body;
          // Sort repos by 'pushed_at'
          this.repos.sort((a, b) => (a["pushed_at"] > b["pushed_at"] ? -1 : 1));
        },
+        complete: () => {
+          // This is needed to avoid Github's API limits during live reloads on
+          // save during development.
+          localStorage.setItem("repos", JSON.stringify(this.repos));
+          let date = Date.now();
+          let exp = date + 2 * (60 * 60 * 1000);
+          localStorage.setItem("repos_exp", String(exp));
+          console.log("repos_exp: " + localStorage.getItem("repos_exp"));
+        },
      });
  }
}
```  
&nbsp;  

The first thing I do is check if the repos exist in localstorage and if they are less than 2 hours old, if so then I load the local version and don't call the API.&nbsp;  

```typescript
    if (
      // Check if we have the repos local
      localStorage.getItem("repos") !== undefined &&
      localStorage.getItem("repos") !== null
    ) {
      // We have the repos local
      // Check how old the local version is
      let exp = Number(localStorage.getItem("repos_exp"));
      if (exp > Date.now()) {
        // Repos are less than 2 hours old
        this.repos = JSON.parse(localStorage.getItem("repos")!);
        return;
      }
      localStorage.removeItem("repos_exp");
      localStorage.removeItem("repos");
    }
```

Then inside the `subscribe()` of the http get call, I added the `complete:` portion to add the repos to localstorage. Since we are making the API call, the repos either don't exist in localstorage or are older than 2 hours so we add them with a 'new' expiration time.


```typescript
        complete: () => {
          // This is needed to avoid Github's API limits during live reloads on
          // save during development.
          localStorage.setItem("repos", JSON.stringify(this.repos));
          let date = Date.now();
          let exp = date + 2 * (60 * 60 * 1000);
          localStorage.setItem("repos_exp", String(exp));
          console.log("repos_exp: " + localStorage.getItem("repos_exp"));
        },
```

Now that we are getting the repos and not hitting limits, it's time to display some information about the repos.

What I decided to do is to loop over the repos with an `*ngFor` loop in a `mat-grid-tile` that is inside a `mat-grid-list`. Inside the tile I add a `project.component`, passing the repo as an `@Input()` to the project component.

prpojects.component.html
```html
<mat-card>
    <mat-card-header>
        <mat-card-title>Projects</mat-card-title>
    </mat-card-header>
    <mat-card-content>
        <mat-grid-list cols="3" rowHeight="200px">
            <mat-grid-tile
                *ngFor="let repo of repos"
                colspan="1"
                rowspan="1"
            >
            <app-project style="height: 100%;width: 100%;" [theRepo]="repo"></app-project>
            </mat-grid-tile>
        </mat-grid-list>
    </mat-card-content>
</mat-card>
```
&nbsp;  

The project.component.html displays the repository "name" and "description" and links to the given repository.


```html
<div class="project">
  <a href="{{ theRepo['html_url'] }}" target="_blank">
    <div>
      <h2>{{ theRepo["name"] }}</h2>
    </div>
    <div>{{ theRepo["description"] }}</div>
  </a>
</div>

```

That's all for this post, in the next post I will go over how I added a blog from static markdown files.

