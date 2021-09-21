import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <Image
            // src="https://gurupawar.github.io/portfolio/assets/man-svgrepo-com.svg"
            src="https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/58/000000/external-man-avatars-vitaliy-gorbachev-flat-vitaly-gorbachev-18.png"
            alt="man-svgrepo"
          />
          <div className="AboutBio">
            Hi there! My name is<strong> Jay Makwana</strong> and I enjoy
            creating things that live on the internet. I am Interested in Web3 and Blockchain tech,I do FrontEnd and most interestingly the backend smart contract stuff!!
          </div>
          <div className="AboutBio tagline2">
            I have become confident using the following technologies.
          </div>
          <Technologies>
            {stackList.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
