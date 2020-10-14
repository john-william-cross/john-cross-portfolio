import React from "react";

function Project(props) {
   console.log(props);
   return (
      <>
         <h4 className="text-primary">
            {props.project.title} ({props.project.rating}) Here is the length in
            minutes: {props.project.totalMinutes}
         </h4>
      </>
   );
}

export default Project;
