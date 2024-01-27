import React from 'react'
import './Resume.css';
import ContentDetail from './ContentDetail';
import { useLocation } from 'react-router-dom';
import cover_pic from "../assets/pcb.jpg";
import ImageRender from './ImageRender';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
export default function Resume() {
    const work_exp = [
        {
            role_title: "Software Engineer at MKUNISOFTINDIA PVT LTD",
            startYear: "11/2021",
            endYear: "Present",
            description: `Analysed and understood the requirements.
             Developed the reusable controls and code.
             Cooperated with the other Developers in the process of continuous development
            integration and testing.`
        },
        {
            role_title: "Software Engineer at EFFTRONICS SYSTEM PVT LTD ",
            startYear: "06/2019",
            endYear: "11/2021",
            description: `Implemented State Machine for packets processing.
             Cooperated with the Firm ware developers for integration with IOT Devices.
             Created SQL Tables and Queries for data logging.
             Implemented packet validation state machine for SP06 protocol.
              Integrated module with Sequence Engine and Packet processing modules`
        }
    ];

    const education_details = [
        {
            role_title: "Bachelor of Technology (BTech) in Computer Science Engineering",
            startYear: "08/2015",
            endYear: "06/2019",
            description: `JNTUH College of Engineering, Sultanpur.`
        },
        {
            role_title: "Board of Intermediate Examination (MPC)",
            startYear: "08/2013",
            endYear: "05/2015",
            description: `Gandhi Junior College, Godavarikhani, Telangana`
        },
        {
            role_title: "Secondary School of Education(SSC)",
            startYear: "06/2012",
            endYear: "06/2013",
            description: `Vani Vidya Vihar High School, Godavarikhani, Telangana`
        }
    ];

    const achievement_details = [
        {
            type:'Hackathon 2k23',
            description:'Participated in Hack to Secure Coding Challenge 2023 #cisco and secured the 1st position.'
        },
        {
            type:'Extra curricular activities',
            description:'Participated in Yuga2k19 Fest @JNTUHCES, conducted and organized the Events'
        },
        
        {
            type:'Hackathon 2k22',
            description:'Actively Participated in Hackathon in 2022 which was conducted at @JNTUH, Hyderabad'
        }
    ]
    const location = useLocation();
    console.log(location.pathname);
    const skills = ['Proficient in .NET Framework, Java, Communication Engineer.', 'Thorough in WinForms, WPF, ASP.NET MVC', 'TCP/IP Protocol Stack, Serial Communication', 'Software Development Life Cycle (SDLC)',
        `Can Creating and Consuming API’s through REST`, 'Have Experience in Data Structures & Algorithms', 'Have Understanding of Oracle, Postgres, MySQL', 'Strong understanding of software development methodologies, like Agile']

    return <>
        <div className="resume">

                <div>
                    <h1 className="resume_title">Resume</h1>
                    <hr />
                    <div className="resume_work">
                        <div className="resume_header">
                            <h2>Work Experience</h2>
                        </div>
                        <div className="resume_content">
                            {work_exp.map((item, index) => (
                                <ContentDetail key={index} title={item.role_title}
                                    startYear={item.startYear}
                                    endYear={item.endYear}
                                    proj_title={item.proj_title}
                                    description={item.description} />
                            ))}
                        </div>
                    </div>
                    <hr />

                    <div className="resume_projects">
                        <div className="resume_header">
                            <h2>Education</h2>
                        </div>
                        <div className="resume_content">

                            {education_details.map((item, index) => (
                                <ContentDetail key={index} title={item.role_title}
                                    startYear={item.startYear}
                                    endYear={item.endYear}
                                    proj_title={item.proj_title}
                                    description={item.description} />
                            ))}
                        </div>
                    </div>

                    <hr />
                    <div className="resume_work">
                        <div className="resume_header">
                            <h2>Skills & Expertise</h2>
                        </div>
                        <ul className="resume_content">
                            {skills.map((item, index) => (
                                <ContentDetail key={index} list_title={item} />
                            ))}
                        </ul>
                    </div>

                    <hr />
                    <div className="resume_work">
                        <div className="resume_header">
                            <h2>Achievements</h2>
                        </div>
                        <ul className="resume_content">
                            {achievement_details.map((item, index) => (
                                <ContentDetail key={index} list_type={item.type} description={item.description} />
                            ))}
                        </ul>
                    </div>
                    
                </div>
        </div>
    </>
}
