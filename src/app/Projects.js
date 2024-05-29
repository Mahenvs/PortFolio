import React from "react";
import "./Projects.css";
import ContentDetail from "./ContentDetail";
import "./Projects.css";
import DevProjects from "./DevProjects";

function Projects() {
  const projects_exp = [
    {
      // cover_pic: cover_pic,
      role_title: "eClient Application",
      tech_skills: "Angular, PrimeNG, Java, Spring Boot, JPA, Microservices",
      description: `A Web Application, that is built as a comprehensive system which handles claim pre-processing and post processing data. A third party system is used to handle master files of client data, provider data, claim data and preference data, and manage the client data in terms of data entry and maintenance. `,
    },
    {
      // cover_pic: tcp_icp,
      role_title: "Chat Services",
      tech_skills: "Angular, Bootstrap, Node.js, Twilio, SQL Server 2008",
      description: `Its an Web Application that is used by the agents in the Call Center for service delivery to customers and partners. 
            It provides chat and audio call features. It streamlines various tasks involved in customer support, ensuring efficient handling of inquiries, problem resolution.
            It also provides reports for administrative use. The report contains the agents loggedIn time, InCall time, away time and much more.. `,
    },
  ];
  return <>
    <div className="resume">
      <h1 className="resume_title">Projects</h1>

      <div className="resume_proj">
        <div className="resume_header">
          {projects_exp.map((item, index) => (
            <ContentDetail
              key={index}
              title={item.role_title}
              cover_pic={item.cover_pic}
              contentDetClass="content_detail_proj"
              proj_title={item.tech_skills}
              bodyClass="project_class"
              description={item.description}
            />
          ))}
        </div>
      </div>
      <DevProjects/>
    </div>

    </>
}

export default Projects;
