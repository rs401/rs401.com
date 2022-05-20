import { FC, useState, useEffect } from "react";
import HttpService from "../services/HttpService";
import RootPage from "./root";

interface Repo {
    name: string,
}

const Projects: FC = () => {
  const [repos, setRepos] = useState<any[]>([]);
  const githubUrl: string = (process.env.REACT_APP_GITHUB_URL as string);

  useEffect(() => {
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
          console.log("We have the repos locally, no need to bother GitHub's API.");
          
          setRepos(JSON.parse(localStorage.getItem('repos')!));
          return;
        }
        localStorage.removeItem('repos_exp');
        localStorage.removeItem('repos');
      }
    HttpService.get(githubUrl).then((res:any[]) => {
        res.sort((a, b) => (a['pushed_at'] > b['pushed_at'] ? -1 : 1));
        setRepos(res);
        localStorage.setItem('repos', JSON.stringify(res));
          let date = Date.now();
          let exp = date + 2 * (60 * 60 * 1000);
          localStorage.setItem('repos_exp', String(exp));
          console.log('repos_exp: ' + localStorage.getItem('repos_exp'));
    });
    
  }, [githubUrl]);
  
  return (
    <RootPage>
        {repos && repos.length !== 0 ? (
            <div>
            {repos.map((repo: any, index: Number, repos: any[]) => {
                return <div key={index as React.Key}>{repo.name}</div>;
            })}
            </div>
        ):(
            <>Loading...</>
        )}
    </RootPage>
  );
};

export default Projects;
