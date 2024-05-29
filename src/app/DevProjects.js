import React from "react";
import "./Projects.css";
import ContentDetail from "./ContentDetail";
import cover_pic from "../assets/pcb.jpg";
import "./Projects.css";
import { Link } from "react-router-dom";
import Card from "./Card";

function DevProjects() {
  const projects_personal = [
    {
      cover_pic: cover_pic,
      role_title: "Netflix Clone",
      tech_skills: "React, TailwindCSS",
      description: `A Clone of Netflix application. It includes basic authentication and displays a list of movies. Plays the trailer on click of a movie card if the trailer exists.`,
      url:"https://netflix-clone-mah.netlify.app"
    },
    {
      cover_pic: cover_pic,
      role_title: "Meals App",
      tech_skills: "React",
      description: `A Sample Meals Application using React`,
      url:"https://meals-appl.netlify.app/"
    },
  ];


  return (
    <div className="">
      <h1 className="resume_title">Personal Projects</h1>

      <div className="resume_proj">
        <div className="card_section">
          {projects_personal.map((item, index) => (
            <>
              <Card

                key={index}
                title={item.role_title}
                contentDetClass="content_detail_proj"
                proj_title={item.tech_skills}
                bodyClass="project_class"
                description={item.description}
                url={item.url}
              />
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DevProjects;
