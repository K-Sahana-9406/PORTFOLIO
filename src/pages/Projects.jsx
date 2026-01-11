import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Projects() {
 const [projects, setProjects] = useState([]);
const [loading, setLoading] = useState(true);


useEffect(() => {
  fetch("https://6963de5b2d146d9f58d49633.mockapi.io/portfolio/projects")
    .then((res) => res.json())
    .then((data) => {
      setProjects(data);
      setLoading(false);
    })
    .catch((err) => {
      console.error("Failed to load projects", err);
      setLoading(false);
    });
}, []);


  return (
    <div className="bg-bg-main min-h-screen text-text-main flex flex-col">
      <Navbar />

      <main className="pt-32 px-6 max-w-7xl mx-auto flex-1">
      
      <div className="max-w-3xl"> <h1 className="text-4xl sm:text-5xl font-bold leading-tight"> Selected <span className="text-blue-main">Projects</span> </h1> <p className="text-text-muted mt-5 text-lg"> Real-world projects that demonstrate my problem-solving, development approach, and technical depth. </p> </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {loading ? (
  <ProjectSkeleton />
) : (
  projects.map((project) => (

            <div
              key={project.id}
   
             
            className="relative bg-blue-main/10 border border-blue-main/30
            rounded-2xl p-4 md:p-5 backdrop-blur-md shadow-xl
            hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] transition"
          
            >
              <h3 className="text-2xl font-semibold text-text-main">{project.title}</h3>
              <p className="mt-3 text-sm text-text-muted flex-1">{project.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 rounded-full bg-blue-main/10 text-blue-main border border-blue-main/20 shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

             
              <div className="mt-4 flex gap-2 flex-wrap">
  <a
    href={project.github}
    target="_blank"
    rel="noreferrer"
    className="bg-gradient-to-r from-blue-dark to-blue-main text-white px-6 py-2 rounded-lg shadow-md hover:shadow-[0_0_25px] transition"
  >
    GitHub
  </a>

  {project.live && (
    <a
      href={project.live}
      target="_blank"
      rel="noreferrer"
      className="px-3 py-2 rounded-lg bg-blue-main text-white text-sm hover:bg-blue-light shadow-sm transition"
    >
      Live Demo
    </a>
  )}

  {project.images && (
    <a
      href={project.images}
      target="_blank"
      rel="noreferrer"
      className="px-3 py-2 rounded-lg bg-blue-main text-white text-sm hover:bg-blue-light shadow-sm transition"
    >
      Screenshots
    </a>
  )}
</div>

            </div>
          )))}
        </div>

      </main>

      <Footer />
    </div>
  );
}
function ProjectSkeleton({ count = 6 }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="
            animate-pulse
            relative bg-blue-main/10 border border-blue-main/30
            rounded-2xl p-4 md:p-5 backdrop-blur-md shadow-xl
          "
        >
          <div className="h-6 w-2/3 bg-blue-main/30 rounded" />

          <div className="mt-4 space-y-2">
            <div className="h-3 w-full bg-blue-main/20 rounded" />
            <div className="h-3 w-5/6 bg-blue-main/20 rounded" />
            <div className="h-3 w-4/6 bg-blue-main/20 rounded" />
          </div>

          <div className="mt-4 flex gap-2 flex-wrap">
            {Array.from({ length: 3 }).map((_, j) => (
              <div
                key={j}
                className="h-6 w-16 rounded-full bg-blue-main/20"
              />
            ))}
          </div>

          <div className="mt-5 flex gap-3">
            <div className="h-9 w-24 rounded-lg bg-blue-main/30" />
            <div className="h-9 w-24 rounded-lg bg-blue-main/20" />
          </div>
        </div>
      ))}
    </>
  );
}
