import React from "react";
import starIcon from "../icon/star.svg";

import linkIcon from "../icon/link.svg";

function truncate(str, length) {
   return str.slice(0, length) + "...";
}

function Project(props) {
   console.log("The props we passed from the parent component: ", props); //remember, props is an object
   //even though it's plural
   return (
      <>
         <div className="row mb-5">
            <div className="col-12 mb-2">
               <a
                  href={props.project.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-reset"
               >
                  <h3 className="font-weight-normal">{props.project.title} </h3>
               </a>
            </div>
            <div className="col-12 col-md-4">
               <a
                  href={props.project.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <img
                     src={require("../image/" + props.project.image)}
                     width="510px"
                     className="img-fluid"
                     alt={props.project.title}
                  />
               </a>
            </div>
            <div className="col-12 col-md-8 mt-3 mt-md-n1">
               <a
                  href={props.project.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-reset"
               >
                  <p>
                     <img src={starIcon} width="16px" alt="Star icon" />
                     <img src={starIcon} width="16px" alt="Star icon" />
                     <img src={starIcon} width="16px" alt="Star icon" />
                     <img src={starIcon} width="16px" alt="Star icon" />
                     <span className="ml-2">
                        {props.project.desc} ({props.project.totalMinutes} min.)
                     </span>
                  </p>
                  <p>{props.project.postedAt}</p>
               </a>
               <a
                  href={props.project.githubUrl}
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
                  {truncate(props.project.githubUrl, 33)}
               </a>
            </div>
         </div>
      </>
   );
}

export default Project;
