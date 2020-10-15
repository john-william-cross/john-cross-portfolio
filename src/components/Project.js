import React from "react";
import starIcon from "../icon/star.svg";
import linkIcon from "../icon/link.svg";
import { truncate } from "../utils/helpers"; //you can rename by adding, for example, "as truncateString" after the word truncate
import formatDate from "date-fns/format";
import getCssClasses from "classnames";

export default class Project extends React.Component {
   // Project.render()

   //constructor and render will be in every class component in react
   constructor() {
      super(); //super allows access to this
      this.state = {
         //you can only assign this.state in the constructor
         //remember it's the state of this ONE project component
         isHoveredOver: false,
      };
   }

   setIsHoveredOver(isHoveredOver) {
      this.setState({ isHoveredOver: isHoveredOver }); // ==>can also write this as this.setState({ isHoveredOver });
      //above, we are setting the value of isHoveredOver to
      //the variable isHoveredOver, which changes based on
      //the cursor location
   }

   displayStars() {
      //this.displayStars, where this means this particular class
      const rating = this.props.project.rating; //this is referring to this class: Project... what is the props of this object
      //remember, this.props is an object even though it's plural
      let stars = [];
      for (let i = 0; i < rating; i++) {
         stars = stars.concat(
            <img src={starIcon} width="16px" alt="Star icon" key={i} />
         );
      }
      return stars;
   }

   render() {
      return (
         <>
            <div className="row mb-5">
               <div
                  className="col-12 mb-2"
                  onMouseEnter={() => {
                     this.setIsHoveredOver(true);
                  }}
                  onMouseLeave={() => {
                     this.setIsHoveredOver(false);
                  }}
               >
                  <a
                     href={this.props.project.youtubeUrl}
                     target="_blank"
                     rel="noopener noreferrer"
                     className={getCssClasses(
                        //getCssClasses is called classNames in the docs
                        "text-reset text-decoration-none",
                        {
                           "text-underline": this.state.isHoveredOver,
                        } //text-underline is depending on whatever this.state.isHoveredOver is
                     )}
                  >
                     <h3 className="font-weight-normal">
                        {this.props.project.title}
                     </h3>
                  </a>
               </div>
               <div
                  className="col-12 col-md-4"
                  onMouseEnter={() => {
                     this.setIsHoveredOver(true);
                  }}
                  onMouseLeave={() => {
                     this.setIsHoveredOver(false);
                  }}
               >
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
                     onMouseEnter={() => {
                        this.setIsHoveredOver(true);
                     }}
                     onMouseLeave={() => {
                        this.setIsHoveredOver(false);
                     }}
                  >
                     <p>
                        {this.displayStars()}
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
                  {this.props.isAdvanced && ( //if this is true, do the next code block
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
                  )}
               </div>
            </div>
         </>
      );
   }
}
