import React from "react";

function Project(props) {
   console.log(props);
   return (
      <>
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
                     <img src={starIcon} width="16px" alt="Star icon" />
                     <img src={starIcon} width="16px" alt="Star icon" />
                     <img src={starIcon} width="16px" alt="Star icon" />
                     <img src={starIcon} width="16px" alt="Star icon" />
                     <span className="ml-2">
                        Validating password and email fields in Ask a Teacher,
                        following best security and UX practices. (3 min.
                        30sec.)
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
      </>
   );
}

export default Project;
