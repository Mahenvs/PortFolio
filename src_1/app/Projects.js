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
            role_title: "FLEX – PCB PROCESSING AND LASER VIA DRILLING APPLICATION",
            tech_skills: "C#, .Net Framework, WinForms, WPF, SQL Server",
            description: `Desktop Application used to handle flex PCB via drilling for PCB laser processing. It can create
            recipes and process recipes on different substrates using different lasers. Supports multiple
            drill and rout tools and configurations. Single head laser device which can process multiple
            panels in single batch. Has inbuilt auto alignment mechanism (can train and verify alignment
            at different levels), panel Z mapping, Illumination control, coarse and fine cameras, skiving and
            R-Skiving, Recipe optimization. Has comprehensive logging and diagnostics functionality. `
        },
        {
            cover_pic: tcp_icp,
            role_title: "TCP Communication Routing Application",
            tech_skills: "C#, WPF, TCP, .Net Framework",
            description: `A .net WPF Application used to connect and communicate with GPRS enabled RTU (remote
                terminal units). Filters invalid and malicious connections. Receives and validates data
                (according to SP06 protocol) from multiple RTU's in parallel and has error detection (discards
                data if checksum or CRC is incorrect). Directs acknowledgement packets to received valid
                data packets. Able to send commands to specific or group of RTU's for link check and time
                synchronization. logs all events and shares corresponding data to other applications in the
                system using shared memory.`
        },
        {
            cover_pic: display_pic,
            role_title: "Displays Routing Application",
            tech_skills: "C#, Win Forms, SNMP, HTTP, Postgres, .NET Framework",
            description: `It is a Routing Application (.net win forms Application) which is used to route text, image,
            video messages to corresponding VMS Boards located across the city from Command
            Control Center. It also monitors, logs and acknowledges network health, display board health
            (display board pixel health, Door Status, Temperature, Ribbon Cable Health) and all routed
            events success and failure information in database and also with command control center. It
            routes data in NTCIP protocol using SNMP Communication. It uses HTTP Protocol for network
            health and display board health related information.`
        },
        {
            cover_pic: RTWMS,
            role_title: "Real Time Work Monitoring System (RTWMS)",
            tech_skills: "C#, Win Forms, SQL Server, PowerBi",
            description: `RTWMS (.net win forms Application) is a Middle ware used to reduce MTTR by providing
            failure notifications via text messages and notifications in its mobile application transparently
            to all concerned and escalates to higher level authorities if not solved in stipulated time and
            get rectifications on real time basis. It also keeps log of all generated, sent, acknowledged,
            escalated, and solved faults in the central data base for showing graphical reports in PowerBi
            and Graphana.`
        },
        {
            cover_pic: network_loggers1,
            role_title: "Network Management of Data Loggers",
            tech_skills: "C#, WPF, Serial Communication",
            description: `NMDL (.net WPF Application) is a software used to receive
            data from Datalogger network using serial communication. Also logs data packets (of
            signaling relays and power supplies). Has Sequence engine which checks for data loss or
            sequence miss. Raises faults in case of failures, displays real time graphs for identifying trends
            and helps in taking decisions quickly.`
        },
        {
            cover_pic: udp,
            role_title: "UDP Communication Mediator Application",
            tech_skills: "C#, Win Forms, UDP, .NET Framework",
            description: `A .net Win form Application acts a mediator application which routes data between IED
            (Intelligent Electronic Devices) other configured applications via UDP Communication.`
        },
        {
            cover_pic: hmu_calibration,
            role_title: "HMU Calibration Tool",
            tech_skills: "C#, WPF, Serial Communication",
            description: `A .net WPF Application used to calibrate a Health Monitoring Units (SHMU), PHMU, BHMU.
            Collects data samples from the device at various voltage levels and generates a calibration
            table by dividing the operating voltage ranges into regions reducing error percentages. logs
            and downloads calibration table into hardware device. Communicates with the device using
            Serial Communication.
            `
        }
    ];
    return (
        <div className="resume">
            <div className="">


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
            </div>
            {/* </div> */}


        </div>
    )
}

export default Projects
