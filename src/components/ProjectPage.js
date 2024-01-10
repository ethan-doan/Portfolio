import React from "react";
import { useParams } from "react-router-dom";
import BlueboxForumDemo from "../videos/BlueboxForumDemo.mp4";
import Navbar from "./Navbar.js";
import TitleCarousel from "./TitleCarousel.js";
import "../styles/ProjectPage.css";

function ProjectPage() {
  const { projectId } = useParams();

  return (
    <div className="project-page-container">
      <Navbar invert={true} />
      {projectId === "bluebox-forum" ? (
        <>
          <TitleCarousel title="Bluebox Forum" invert={true} />
          <div className="project-page-content">
            <video
              className="project-page-video"
              autoPlay
              muted
              playsInline
              loop
              src={BlueboxForumDemo}
              type="video/mp4"
            />
            <div className="project-page-description">
              <div>
                During my time at Creighton University, I had the opportunity to
                be involved in the Practicum for International Development as a
                part of my business degree. This course offers students the
                chance to apply their academic knowledge in service-oriented
                roles, making a positive impact on communities globally. During
                my time in this class, I worked on the technology track helping
                to advance and develop further iterations of the Bluebox.
              </div>
              <div>
                The Bluebox, a compact digital library built on a Raspberry Pi
                platform, offers a wealth of preloaded educational materials
                designed to enhance learning in the most remote areas of the
                world. This system, accessible without an Internet connection,
                allows any device connected to its hotspot, through wireless or
                wired connections, to freely access its resources. Ideal for
                communities, teachers, and students, the Bluebox's content can
                be viewed on any web browser installed on their devices.
                Additionally, a solar-powered version is available for
                deployment in areas lacking electricity.
              </div>
              <div>
                Throughout the semester, our class focused on enhancing the
                functionalities of the Bluebox. Our project led us to Santiago
                de los Caballeros in the Dominican Republic, where we had the
                opportunity to make a direct impact. We visited rural schools,
                donating Blueboxes and necessary devices, and spent time
                educating instructors and students on how to leverage the
                Bluebox's capabilities. This effort was not just about providing
                technological tools, but also about empowering these communities
                with new avenues for learning and development.
              </div>
              <div>
                Unfortunately, students enrolled in the course have just a
                single chance to visit these schools, and Creighton’s professors
                are limited to an annual visit. We have observed that sometimes,
                likely due to the language barriers involved, the instructors at
                these schools may not fully understand the Bluebox's
                capabilities, causing them to be reluctant to use it.
                Recognizing the need for ongoing support, our class proposed a
                solution: a dedicated platform for these instructors to seek
                assistance and share experiences with fellow Bluebox recipients.
                I spearheaded the development of the Bluebox Forum, a
                collaborative space designed for this purpose. This forum not
                only facilitates problem-solving and knowledge exchange among
                the community in Santiago, but also enables Creighton's
                professors to offer remote troubleshooting. The aim is to ensure
                that every school maximizes the benefits of the Bluebox,
                unlocking its full potential for enhancing education.
              </div>
              <hr />
              <ul>
                <div style={{ fontWeight: "bold" }}>Tasks:</div>
                <li>
                  Created a forum for Bluebox recipients to troubleshoot issues
                  and contribute to the Bluebox community using MongoDB,
                  Express, React, and Node
                </li>
                <li>
                  Leveraged React Router DOM for URL driven navigation and
                  dynamic page rendering, significantly enhancing page
                  navigation and providing seamless transitions between
                  components.
                </li>
                <li>
                  Identified user needs and interactions and developed highly
                  responsive user interface components with React and React
                  Bootstrap
                </li>
                <li>
                  Designed robust and scalable REST APIs using Express and Node
                  enabling seamless data handling, real-time data updating, and
                  efficient server-side operations with MongoDB
                </li>
              </ul>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default ProjectPage;
