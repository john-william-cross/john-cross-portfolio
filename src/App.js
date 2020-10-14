import React from "react";
import "./style/master.scss";
import "./components/Project";
import Project from "./components/Project";
import { projects } from "./data/projects";
import githubLogo from "./icon/github.svg";
import linkedInLogo from "./icon/linkedin.svg";
import youtubeLogo from "./icon/youtube.svg";
import starIcon from "./icon/star.svg";
import video1 from "./image/validation-of-email-and-password-on-account-creation.jpg";
import video2 from "./image/walkthrough-of-the-ask-a-teacher-prototype.jpg";
import linkIcon from "./icon/link.svg";

console.log(projects);

function App() {
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

               {/* Start Project Component */}
               <div className="row mb-5">
                  <div className="col-12 mb-2">
                     <a
                        href="https://www.youtube.com/watch?v=wLNF4YaMOwk"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-reset"
                     >
                        <h3 className="font-weight-normal">
                           Validation of Email and Password on Account Creation
                        </h3>
                     </a>
                  </div>
                  <div className="col-12 col-md-4">
                     <a
                        href="https://www.youtube.com/watch?v=wLNF4YaMOwk"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        <img
                           src={video1}
                           width="510px"
                           className="img-fluid"
                           alt="Validation of Email and Password on Account Creation"
                        />
                     </a>
                  </div>
                  <div className="col-12 col-md-8 mt-3 mt-md-n1">
                     <a
                        href="https://www.youtube.com/watch?v=wLNF4YaMOwk"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-decoration-none text-reset"
                     >
                        <p>
                           <img
                              src={starIcon}
                              width="16px"
                              className="mr-n1"
                              alt="Star icon"
                           />
                           <img
                              src={starIcon}
                              width="16px"
                              className="mr-n1"
                              alt="Star icon"
                           />
                           <img
                              src={starIcon}
                              width="16px"
                              className="mr-n1"
                              alt="Star icon"
                           />
                           <img
                              src={starIcon}
                              width="16px"
                              className="mr-n1"
                              alt="Star icon"
                           />
                           <span className="ml-2">
                              Validating password and email fields in Ask a
                              Teacher, following best security and UX practices.
                              (3 min. 30sec.)
                           </span>
                        </p>
                        <p>October 8, 2020</p>
                     </a>
                     <a
                        href="https://github.com/john-william-cross/ask-a-teacher"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        <img
                           src={linkIcon}
                           width="16px"
                           className="mr-2"
                           alt=""
                           target="_blank"
                           rel="noopener noreferrer"
                        />
                        https://github.com/john-william-c...
                     </a>
                  </div>
               </div>
               {/* End Project Component */}

               {/* Start Project Component */}
               <div className="row mb-5">
                  <div className="col-12 mb-2">
                     <a
                        href="https://www.youtube.com/watch?v=3N6EtIoZBRQ&t=5s"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-reset"
                     >
                        <h3 className="font-weight-normal">
                           Walkthrough of the Ask a Teacher Prototype
                        </h3>
                     </a>
                  </div>
                  <div className="col-12 col-md-4">
                     <a
                        href="https://www.youtube.com/watch?v=3N6EtIoZBRQ&t=5s"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        <img
                           src={video2}
                           width="510px"
                           className="img-fluid"
                           alt="Walkthrough of the Ask a Teacher Prototype"
                        />
                     </a>
                  </div>
                  <div className="col-12 col-md-8 mt-3 mt-md-n1">
                     <a
                        href="https://www.youtube.com/watch?v=3N6EtIoZBRQ&t=5s"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-decoration-none text-reset"
                     >
                        <p>
                           <img
                              src={starIcon}
                              width="16px"
                              className="mr-n1"
                              alt="Star icon"
                           />
                           <img
                              src={starIcon}
                              width="16px"
                              className="mr-n1"
                              alt="Star icon"
                           />
                           <img
                              src={starIcon}
                              width="16px"
                              className="mr-n1"
                              alt="Star icon"
                           />
                           <img
                              src={starIcon}
                              width="16px"
                              className="mr-n1"
                              alt="Star icon"
                           />
                           <img
                              src={starIcon}
                              width="16px"
                              className="mr-n1"
                              alt="Star icon"
                           />
                           <span className="ml-2">
                              Walkthrough of Ask a Teacher, an app in which
                              teachers answer questions submitted by users.
                              (2min. 47sec.)
                           </span>
                        </p>
                        <p>October 8, 2020</p>
                     </a>
                     <a
                        href="https://github.com/john-william-cross/ask-a-teacher"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        <img
                           src={linkIcon}
                           width="16px"
                           className="mr-2"
                           alt=""
                           target="_blank"
                           rel="noopener noreferrer"
                        />
                        https://github.com/john-william-c...
                     </a>
                  </div>
               </div>
               {/* End Project Component */}
            </div>
         </div>
      </div>
   );
}

export default App;
