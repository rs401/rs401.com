import { FC, useState, useEffect } from "react";
import HttpService from "../services/HttpService";
import PinnedProjects from "../components/PinnedProjects";
import GetPinnedRepos from "../services/PinnedRepoData";
import Spinner from "react-bootstrap/Spinner";
import Row from "react-bootstrap/Row";
import { logEvent } from "firebase/analytics";
import { analytics } from "../firebase-config";
import Project from "../components/Project";

const projects: any[][] = GetPinnedRepos();

const Projects: FC = () => {
  const [repos, setRepos] = useState<any[]>([]);
  const githubUrl: string = process.env.REACT_APP_GITHUB_URL as string;

  //   function fetchRepos() {
  //     if (
  //         // Check if we have the repos local
  //         localStorage.getItem("repos") !== undefined &&
  //         localStorage.getItem("repos") !== null
  //       ) {
  //         // We have the repos local
  //         // Check how old the local version is
  //         let exp = Number(localStorage.getItem("repos_exp"));
  //         if (exp > Date.now()) {
  //           // Repos are less than 2 hours old
  //           console.log(
  //             "We have the repos locally, no need to bother GitHub's API."
  //           );

  //           setRepos(JSON.parse(localStorage.getItem("repos")!));
  //           console.log("repos:", repos);

  //           return;
  //         }
  //         localStorage.removeItem("repos_exp");
  //         localStorage.removeItem("repos");
  //       }
  //       HttpService.get(githubUrl).then((res: any[]) => {
  //         res.sort((a, b) => (a["pushed_at"] > b["pushed_at"] ? -1 : 1));
  //         setRepos(res);
  //         localStorage.setItem("repos", JSON.stringify(res));
  //         let date = Date.now();
  //         let exp = date + 2 * (60 * 60 * 1000);
  //         localStorage.setItem("repos_exp", String(exp));
  //         console.log("repos_exp: " + localStorage.getItem("repos_exp"));
  //       });
  //   }
  useEffect(() => {
    logEvent(analytics, "projects_visited");

    async function fetchRepos() {
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
          console.log(
            "We have the repos locally, no need to bother GitHub's API."
          );

          setRepos(JSON.parse(localStorage.getItem("repos")!));

          return;
        }
        localStorage.removeItem("repos_exp");
        localStorage.removeItem("repos");
      }
      HttpService.get(githubUrl).then((res: any[]) => {
        res.sort((a, b) => (a["pushed_at"] > b["pushed_at"] ? -1 : 1));
        setRepos(res);
        localStorage.setItem("repos", JSON.stringify(res));
        let date = Date.now();
        let exp = date + 2 * (60 * 60 * 1000);
        localStorage.setItem("repos_exp", String(exp));
        console.log("repos_exp: " + localStorage.getItem("repos_exp"));
      });
    }
    if (repos.length === 0) {
      fetchRepos();
    }
    // console.log("repos:", repos);
  }, [githubUrl, repos]);

  return (
    <div>
      <PinnedProjects projects={projects} />
      {repos && repos.length !== 0 ? (
        <Row className="gy-3 gx-3">
          {repos.map((repo: any) => {
            return <Project key={repo.name} repo={repo} />;
          })}
        </Row>
      ) : (
        <Spinner animation="border" variant="secondary" />
      )}
    </div>
  );
};

export default Projects;
