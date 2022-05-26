import { FC, useEffect } from "react";
import Header from "../components/Header";
import PinnedProjects from "../components/PinnedProjects";
import GetPinnedRepos from "../services/PinnedRepoData";
import { logEvent } from "firebase/analytics";
import { analytics } from "../firebase-config";

const projects: any[][] = GetPinnedRepos();

const Home: FC = () => {
  useEffect(() => {
    logEvent(analytics, "profile_visited");
  }, []);
  return (
    <div>
      <Header />
      <PinnedProjects projects={projects} />
    </div>
  );
};

export default Home;
