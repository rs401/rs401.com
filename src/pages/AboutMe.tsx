import { FC } from "react";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import RootPage from "./root";

// visual c# certificate: https://www.parchment.com/u/award/bf48477de294dd78dc0169a452fdb425
// soft dev certificate: https://www.parchment.com/u/award/160054c540146f6fae863ce3725957df
// c++ certificate: https://www.parchment.com/u/award/58fbb2b24d387d5fba2fd12fad751167
// degree: https://www.parchment.com/u/award/19c70b3600c0adea5c814d97e6cb025d

const achievements: any[] = [
  {
    name: "Degree",
    img: "/img/degree.jpg",
    url: "https://www.parchment.com/u/award/19c70b3600c0adea5c814d97e6cb025d",
  },
  {
    name: "C++",
    img: "/img/cpp-certificate.jpg",
    url: "https://www.parchment.com/u/award/58fbb2b24d387d5fba2fd12fad751167",
  },
  {
    name: "Visual C#",
    img: "/img/csharp-certificate.jpg",
    url: "https://www.parchment.com/u/award/bf48477de294dd78dc0169a452fdb425",
  },
  {
    name: "Software Development",
    img: "/img/softdev-certificate.jpg",
    url: "https://www.parchment.com/u/award/160054c540146f6fae863ce3725957df",
  },
];

const AboutMe: FC = () => {
  return (
    <RootPage>
      <Card bg="dark" text="white">
        <Card.Header as="h5" className="text-center">
          Rich Stadnick
        </Card.Header>
        <Card.Body>
          <Card.Title className="text-center mb-3">
            Father, Husband, Christian, Nerd.
          </Card.Title>
          <div className="text-center mb-3">
            <img
              style={{ width: "15rem", boxShadow: "1px 1px 5px 5px lightblue" }}
              alt="Profile"
              src="/img/profile2.jpg"
              className="rounded"
            />
          </div>
          <div>
            <p>
              I am a Father to 3 boys and 2 girls ages 23, 12, 6, 2 and the
              newest is 8 months. I married the most beautiful woman in the
              world 13 years ago. I have been a stay at home Dad for the last 5
              years while homeschooling my children and completing my Bachelor
              Degree in Software Development. I was saved in 2012 when Jesus
              came into my life.
            </p>

            <p>
              I am eager to get back to work so that my wife will be able to
              transition to stay at home mom. Finding remote employment would be
              ideal as I would be able to be here when my children "need Daddy".
            </p>

            <p>
              I love working with computers, learning, working/playing with
              different programming/scripting languages. I have used Linux since
              2004.
            </p>

            <p>
              I earned certificates in C++ Programming, Visual C# Programming
              and Software Development during my degree path.
            </p>
            <p>I completed courses (and earned A's) in:</p>
            <ul>
              <li>Linux/ Unix Programming</li>
              <li>C++ Programming</li>
              <li>C# Programming</li>
              <li>Java Programming</li>
              <li>Python Programming</li>
              <li>Web Development</li>
              <li>Algorithms and Data Structures</li>
              <li>Enterprise Relational Databases</li>
              <li>Information Systems Analysis and Design</li>
              <li>Applied Software Practice</li>
              <li>Cloud Computing Security</li>
            </ul>
          </div>
        </Card.Body>
      </Card>

      <div className="d-flex flex-wrap p-2">
        {achievements.map((achieve: any, index: number) => {
          return (
            <Card style={{ width: "18rem" }} className="m-2" key={index}>
              <Card.Img variant="top" src={achieve.img} />
              <Card.Body>
                <Card.Title>{achieve.name}</Card.Title>
                <Card.Text>
                  <a rel="noreferrer" target="_blank" href={achieve.url}>
                    {achieve.url}
                  </a>
                </Card.Text>
              </Card.Body>
            </Card>
            // <Carousel.Item key={index}>
            //   <img
            //     style={{objectFit: "cover"}}
            //     src={achieve.img}
            //     alt={achieve.name}
            //   />
            //   <Carousel.Caption>
            //     <h5>{achieve.name}</h5>
            //     <a rel="noreferrer" target="_blank" href={achieve.url}>{achieve.url}</a>
            //   </Carousel.Caption>
            // </Carousel.Item>
          );
        })}
      </div>
    </RootPage>
  );
};
export default AboutMe;
