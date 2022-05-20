import React, { FC } from "react";
import RootPage from "./root";
import Header from "../components/Header";
import PinnedProjects from "../components/PinnedProjects";
import GetPinnedRepos from "../services/PinnedRepoData";

const projects: any[][] = GetPinnedRepos();

const Home: FC = () => {
  return (
    <RootPage>
      <Header />
      <PinnedProjects projects={projects} />
    </RootPage>
  );
};

export default Home;
