import React from "react";
import starIcon from "../icon/star.svg";
import linkIcon from "../icon/link.svg";
import { truncate } from "../utils/helpers"; //you can rename by adding, for example, "as truncateString" after the word truncate
import formatDate from "date-fns/format";

export default class Project extends React.Component {
   render() {
      const rating = this.props.project.rating;
      console.log(rating);
      function displayStars() {
         let stars = [];
         for (let i = 0; i < rating; i++) {
            stars = stars.concat(
               <img src={starIcon} width="16px" alt="Star icon" key={i} />
            );
         }
         return stars;
      }

      //remember, this.props is an object even though it's plural
      return (
         <>
            <div className="row mb-5">
               <div className="col-12 mb-2">
                  <a
                     href={this.props.project.youtubeUrl}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-reset"
                  >
                     <h3 className="font-weight-normal">
                        {this.props.project.title}{" "}
                     </h3>
                  </a>
               </div>
               <div className="col-12 col-md-4">
                  <a
                     href={this.props.project.youtubeUrl}
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     <img
                        src={require("../image/" + this.props.project.image)}
                        width="510px"
                        className="img-fluid"
                        alt={this.props.project.title}
                     />
                  </a>
               </div>
               <div className="col-12 col-md-8 mt-3 mt-md-n1">
                  <a
                     href={this.props.project.youtubeUrl}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-decoration-none text-reset"
                  >
                     <p>
                        {displayStars()}
                        <span className="ml-2">
                           {this.props.project.desc} (
                           {this.props.project.totalMinutes} min.)
                        </span>
                     </p>
                     <p>
                        {formatDate(
                           this.props.project.postedAt,
                           "MMM. d, yyyy"
                        )}
                     </p>
                  </a>
                  <a
                     href={this.props.project.githubUrl}
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
                     {truncate(this.props.project.githubUrl, 33)}
                  </a>
               </div>
            </div>
         </>
      );
   }
}
