import { FC } from "react";
import Header from "../components/Header";
import PinnedProjects from "../components/PinnedProjects";
import GetPinnedRepos from "../services/PinnedRepoData";

const projects: any[][] = GetPinnedRepos();

const Home: FC = () => {
  return (
    <div>
      <Header />
      <PinnedProjects projects={projects} />
    </div>
  );
};

export default Home;
