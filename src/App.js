import React from "react";
import "./style/master.scss";
import "./components/Project";
import Project from "./components/Project";
import { projects } from "./data/projects";

console.log(projects);

function App() {
   return (
      <>
         <h1 className="text-danger">Hello world</h1>
         {/* This is a comment in JSX */}
         {projects.map((project) => {
            return <Project project={project} key={project.id} />; // TODO: add key
         })}
      </>
   );
}

export default App;
