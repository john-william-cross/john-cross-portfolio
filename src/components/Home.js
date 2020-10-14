import React from "react";
import "../style/master.scss";
import "./Project";
import Project from "./Project";
import { projects } from "../data/projects";
import githubLogo from "../icon/github.svg";
import linkedInLogo from "../icon/linkedin.svg";
import youtubeLogo from "../icon/youtube.svg";

console.log(projects);

export default function Home() {
   return (
      <div className="container">
         <div className="row mt-2">
            <div className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
               <h1 className="display-3 mb-1 text-center title">John Cross</h1>
               <p className="lead font-weight-normal mb-4 text-center">
                  Full stack developer
               </p>
               <p className="lead font-weight-normal text-center mb-4 mb-sm-5">
                  <a
                     href="https://github.com/john-william-cross"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="d-inline-block"
                  >
                     <img
                        src={githubLogo}
                        width="24px"
                        className="mt-n1"
                        alt="Github logo"
                     />
                     <span className="ml-2">Github</span>
                  </a>
                  <a
                     href="https://www.linkedin.com/in/john-william-cross/"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="d-inline-block"
                  >
                     <img
                        src={linkedInLogo}
                        width="20px"
                        className="ml-4 mt-n1"
                        alt="LinkedIn logo"
                     />
                     <span className="ml-2">LinkedIn</span>
                  </a>
                  <a
                     href="https://www.youtube.com/channel/UCXJsMHVQxBvbhN98CqGdG9Q"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="d-inline-block"
                  >
                     <img
                        src={youtubeLogo}
                        width="28px"
                        className="ml-4 mt-1"
                        alt="Youtube logo"
                     />
                     <span className="ml-2">YouTube</span>
                  </a>
               </p>
               <div className="row mb-2">
                  <div className="col-12 col-sm-8">
                     <input
                        id="search-projects"
                        className="form-control"
                        placeholder="Search projects"
                     />
                  </div>
                  <div className="col-12 col-sm-4">
                     <div className="custom-control custom-checkbox custom-control-inline float-right mr-0 mt-2">
                        <input
                           type="checkbox"
                           className="custom-control-input"
                           id="advanced-view"
                        />
                        <label
                           className="custom-control-label"
                           htmlFor="advanced-view"
                        >
                           Advanced view
                        </label>
                     </div>
                  </div>
               </div>
               <div className="row mb-5">
                  <div className="col-12">
                     <div className="custom-control custom-radio custom-control-inline">
                        <input
                           type="radio"
                           id="most-recent"
                           name="order-projects"
                           className="custom-control-input"
                        />
                        <label
                           className="custom-control-label"
                           htmlFor="most-recent"
                        >
                           Most recent
                        </label>
                     </div>
                     <div className="custom-control custom-radio custom-control-inline">
                        <input
                           type="radio"
                           id="most-popular"
                           name="order-projects"
                           className="custom-control-input"
                        />
                        <label
                           className="custom-control-label"
                           htmlFor="most-popular"
                        >
                           Most popular
                        </label>
                     </div>
                  </div>
               </div>
               {/* for each project, map over it and return new data, 
               except instead of new data, we want to return the 
               project component */}
               {projects.map((project) => {
                  return (
                     <Project
                        project={project}
                        key={
                           project.id
                        } /*project={project} is a key value pair*/
                     />
                  ); //we are creating a project property
                  //inside the Project component, and setting its value equal to each project
                  //(the variable) as we iterate over it with the map function. Remember the map
                  //function will return a jsx component. So it goes and fetches the Project.js
                  //component, and then renders it in the app.
               })}
            </div>
         </div>
      </div>
   );
}
