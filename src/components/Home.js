import React from "react";
import "../style/master.scss";
import "./Project";
import Project from "./Project";
import { projects } from "../data/projects";
import Bio from "./Bio";
import orderBy from "lodash/orderBy";
import { safelyParseJson } from "../utils/helpers";
console.log(projects);

export default class Home extends React.Component {
   constructor(props) {
      super(props);
      const activeProjects = projects.filter((project) => {
         return project.isActive;
      }); // imagine we are returning the filtered results from an API
      const defaultOrder = '["postedAt", "desc"]';
      const params = safelyParseJson(defaultOrder);
      const orderedProjects = orderBy(activeProjects, ...params);
      this.state = {
         activeProjects: orderedProjects,
         isAdvanced: false,
         displayedProjects: orderedProjects,
         searchInput: "",
         projectOrder: defaultOrder,
      };
   }

   updateState(e) {
      let value = e.target.value;
      if (value === "true" || value === "false") {
         value = safelyParseJson(value); // "true" will turn into true
      }
      // eslint-disable-next-line
      // if (value == Number(value)) {
      //    // "4" == 4
      //    value = safelyParseJson(value); // "4 will turn into 4
      // }
      this.setState({ [e.target.name]: value });

      // const partialState = {};  these three lines do the same thing as the line above
      // partialState[key] = value;
      // this.setState(partialState);
   }

   setSearchInput(e) {
      // e => something is typed in
      const searchInput = e.target.value; // get that value, store in searchInput
      this.setState((prevState) => {
         return {
            searchInput: searchInput, //we update search input
            displayedProjects: prevState.activeProjects.filter((project) => {
               //prevState refers to before the next lines of code
               //filter the projects
               const lowerCasedInput = searchInput.toLowerCase();
               const projectTitle = project.title.toLowerCase();
               const projectDesc = project.desc.toLowerCase();
               return (
                  projectTitle //when the project title
                     .toLowerCase() //toLowerCase
                     .includes(lowerCasedInput) ||
                  projectDesc.toLowerCase().includes(lowerCasedInput)
               ); //includes the searchInput toLowerCase
            }), //a match will be found and put into the displayedProjects array
         }; // if it's false it won't be added. That's how filter gives us just the
      }); //projects that pass the test
   }

   setProjectOrder(e) {
      const projectOrder = e.target.value; //get the projectOrder which is a string
      const params = safelyParseJson(projectOrder); //parse that into an array of parameters
      this.setState((prevState) => {
         return {
            projectOrder: projectOrder,
            displayedProjects: orderBy(prevState.displayedProjects, ...params),
         }; //we are returning a new state of displayed projects, in which we are ordering the prevState
      }); // by the parameters, which is a spread out array into two separate strings because we parsed it
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
                           value={this.state.searchInput} //this value is grabbed by setSearchInput
                           onChange={(e) => {
                              //when something changes in this input box, fire an anonymous method that calls setSearchInput
                              this.setSearchInput(e); //again, this refers to the whole component
                           }}
                        />
                     </div>
                     <div className="col-12 col-sm-4">
                        <div className="custom-control custom-checkbox custom-control-inline float-right mr-0 mt-2">
                           <input
                              type="checkbox"
                              className="custom-control-input"
                              id="isAdvanced"
                              checked={this.state.isAdvanced} //we are accessing the whole class of Home, then accessing the state of it,
                              //then accessing the isAdvanced property from the state object
                              name="isAdvanced"
                              value={!this.state.isAdvanced}
                              onChange={(e) => {
                                 this.updateState(e); //again, this refers to the whole component
                              }}
                           />
                           <label
                              className="custom-control-label"
                              htmlFor="isAdvanced"
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
                              name="project-order"
                              value='["postedAt", "desc"]'
                              checked={
                                 this.state.projectOrder ===
                                 '["postedAt", "desc"]'
                              }
                              onChange={(e) => {
                                 this.setProjectOrder(e);
                              }}
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
                              name="project-order"
                              value='["rating", "desc"]'
                              checked={
                                 this.state.projectOrder ===
                                 '["rating", "desc"]'
                              }
                              onChange={(e) => {
                                 this.setProjectOrder(e);
                              }}
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

                  {this.state.displayedProjects.map((project) => {
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
