import React from "react";
import "../style/master.scss";
import "./Project";
import Project from "./Project";
import { projects } from "../data/projects";

import Bio from "./Bio";

console.log(projects);

export default class Home extends React.Component {
   constructor(props) {
      super(props);
      const activeProjects = projects.filter((project) => {
         return project.isActive;
      });
      this.state = {
         isAdvanced: false,
         projects: activeProjects,
      };
   }

   setIsAdvanced() {
      this.setState({ isAdvanced: !this.state.isAdvanced }); //this is the same as the if/else statement below
      //set the state to isAdvanced.what we're going to set it to is the opposite of whatever it was. If it's false,
      //we use the ! operator to set it to true; if it's true, use the ! operator to set it to false.

      // if (this.state.isAdvanced) {
      //    this.setState({ isAdvanced: false });
      // } else {
      //    this.setState({ isAdvanced: true });
      // }
   }

   setSearchInput() {
      console.log(`you are searching!`);
   }

   render() {
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
                           onChange={() => {
                              this.setSearchInput(); //again, this refers to the whole component
                           }}
                        />
                     </div>
                     <div className="col-12 col-sm-4">
                        <div className="custom-control custom-checkbox custom-control-inline float-right mr-0 mt-2">
                           <input
                              type="checkbox"
                              className="custom-control-input"
                              id="advanced-view"
                              checked={this.state.isAdvanced} //we are accessing the whole class of Home, then accessing the state of it,
                              //then accessing the isAdvanced property from the state object
                              onChange={() => {
                                 this.setIsAdvanced(); //again, this refers to the whole component
                              }}
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

                  {this.state.projects.map((project) => {
                     return (
                        <Project
                           project={project}
                           key={project.id}
                           isAdvanced={this.state.isAdvanced}
                        />
                     );
                  })}

                  {/* {[ react will automatically render things in an array! 
                     <h2>Hello</h2>,
                     <h2>How's it going?</h2>,
                     <h2>Find and you?</h2>,
                  ]} */}
               </div>
            </div>
         </div>
      );
   }
}
