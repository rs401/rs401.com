const GetPinnedRepos = ():any[][] => {
  return [
    [
      {
        name: "Bissues",
        description:
          "Bissues is a Bug and Issue tracker, developed for a course project at Champlain College. Written in C# with .NET 5.0, PostgreSQL, Docker.",
        imageUrl: "/img/bissues.png",
        githubUrl: "https://github.com/rs401/BissuesProject",
        demoUrl: "https://bissues.hupden.com/",
      },
      {
        name: "Lets Go",
        description: "Forum type application, written in Go with Gin framework, PostgreSQL, Redis, Docker.",
        imageUrl: "/img/letsgo.events.png",
        githubUrl: "https://github.com/rs401/letsgo",
        demoUrl: "https://www.letsgo.events/",
      },
      {
        name: "Send This",
        description: "An application that lets you easily send a file from desktop/laptop, to your mobile device. Written in Angular with Google Cloud Functions as the backend.",
        imageUrl: "/img/send-this.png",
        githubUrl: "https://github.com/rs401/send-this-42ae",
        demoUrl: "https://send-this-42ae.web.app/",
      },
    ],
    [
      {
        name: "Typing Game",
        description: "Typing Practice Game is a game I made to help my son practice typing. I wrote this during my C++ courses.",
        imageUrl: "/img/typing.gif",
        githubUrl: "https://github.com/rs401/Typing_Practice_Game",
        demoUrl: "https://github.com/rs401/Typing_Practice_Game",
      },
      {
        name: "Lets Go - Firebase",
        description: "My 'Lets Go' app, Firebase edition. Front end React, Back end Firestore and Cloud Functions.",
        imageUrl: "/img/letsgo-fire.png",
        githubUrl: "https://github.com/rs401/letsgofire",
        demoUrl: "https://letsgo-325500.firebaseapp.com/",
      },
      {
        name: "Lets Go Rip!",
        description: "Go gRPC microservices for Lets Go Rip application. Kubernetes and GKE.",
        imageUrl: "/img/letsgo-rip.png",
        githubUrl: "https://github.com/rs401/letsgorip",
        demoUrl: "https://github.com/rs401/letsgorip",
      },
    ],
    // [
    //   {
    //     name: "c",
    //     description: "",
    //     imageUrl: "/img/",
    //     githubUrl: "",
    //     demoUrl: "",
    //   },
    //   {
    //     name: "d",
    //     description: "",
    //     imageUrl: "/img/",
    //     githubUrl: "",
    //     demoUrl: "",
    //   },
    //   {
    //     name: "e",
    //     description: "",
    //     imageUrl: "/img/",
    //     githubUrl: "",
    //     demoUrl: "",
    //   },
    // ],
    // [
    //   {
    //     name: "c",
    //     description: "",
    //     imageUrl: "/img/",
    //     githubUrl: "",
    //     demoUrl: "",
    //   },
    //   {
    //     name: "d",
    //     description: "",
    //     imageUrl: "/img/",
    //     githubUrl: "",
    //     demoUrl: "",
    //   },
    //   {
    //     name: "e",
    //     description: "",
    //     imageUrl: "/img/",
    //     githubUrl: "",
    //     demoUrl: "",
    //   },
    // ],
  ];
}
export default GetPinnedRepos;