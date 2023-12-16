import React from 'react'
import './Projects.css';
import ContentDetail from './ContentDetail';
import { useLocation } from 'react-router-dom';
import cover_pic from "../assets/pcb.jpg";
import RTWMS from "../assets/RTWMS.png";
import display_pic from "../assets/displays.jpg";
import tcp_icp from "../assets/tcp_icp.jpg";

import udp from "../assets/udp.jpg";
import hmu_calibration from "../assets/hmu_calibration.jpg";
import network_loggers1 from "../assets/network_loggers1.png";
import './Projects.css';

function Projects() {
    const projects_exp = [
        {
            cover_pic: cover_pic,
            role_title: "eClient Application",
            tech_skills: "Angular, PrimeNG, Java, Spring Boot, JPA, Microservices",
            description: `A Web Application, that is built as a comprehensive system which handles claim pre-processing and post processing data. A third party system is used to handle master files of client data, provider data, claim data and preference data, and manage the client data in terms of data entry and maintenance. `
        },
        {
            cover_pic: tcp_icp,
            role_title: "Chat Services",
            tech_skills: "Angular, Bootstrap, Node.js, Twilio, SQL Server 2008",
            description: `Its an Web Application that is used by the agents in the Call Center for service delivery to customers and partners. 
            It provides chat and audio call features. It streamlines various tasks involved in customer support, ensuring efficient handling of inquiries, problem resolution.
            It also provides reports for administrative use. The report contains the agents loggedIn time, InCall time, away time and much more.. `
        },
       
    ];
    return (
        <div className="resume">
                <h1 className="resume_title">Projects</h1>

                <div className="resume_proj">
                    <div className="resume_header">
                        {projects_exp.map((item, index) => (
                            <ContentDetail key={index} title={item.role_title}
                                cover_pic={item.cover_pic}
                                contentDetClass="content_detail_proj"
                                proj_title={item.tech_skills}
                            bodyClass="project_class"
                                description={item.description} />
                        ))}
                    </div>
                </div>
                <div className='footer'>
                    Image by  &nbsp;<a className='color-purple' href="https://www.freepik.com/free-vector/organic-flat-customer-support-illustration_13184981.htm#query=chat%20support&position=16&from_view=keyword&track=ais&uuid=61a96eb3-5629-40da-93c0-7db01ece75d5">Freepik</a>
                    </div>


        </div>
    )
}

export default Projects
