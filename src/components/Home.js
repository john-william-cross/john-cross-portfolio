import React from "react";
import "../style/master.scss";
import "./Project";
import Project from "./Project";
import { projects } from "../data/projects";

import Bio from "./Bio";

console.log(projects);

export default function Home() {
   return (
      <div className="container">
         <div className="row mt-2">
            <div className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
               <Bio />
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
