


import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaJava,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiMysql,
} from "react-icons/si";

const iconMap = {
  html: <FaHtml5 />,
  css: <FaCss3Alt />,
  js: <FaJs />,
  react: <FaReact />,
  node: <FaNodeJs />,
  express: <SiExpress />,
  tailwind: <SiTailwindcss />,
  mysql: <SiMysql />,
  mongo: <SiMongodb />,
  java: <FaJava />,
};

export default function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/skills")
      .then((res) => res.json())
      .then((data) => setSkills(data))
      .catch((err) => console.error("Failed to load skills", err));
  }, []);

  const languages = skills.filter((s) => s.category === "language");
  const frontend = skills.filter((s) => s.category === "frontend");
  const backend = skills.filter((s) => s.category === "backend");

  return (
    <div className="bg-bg-main min-h-screen text-text-main flex flex-col">
      <Navbar />

      <main className="pt-28 px-6 max-w-7xl mx-auto flex-1">
        {/* HEADER */}
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Skills, <span className="text-blue-main">Applied</span>
          </h1>
          <p className="text-text-muted mt-4 text-lg">
            A dynamic snapshot of how I actually use my skills while building real-world applications.
          </p>
        </div>

        <div className="mt-16 space-y-20">
          <SkillSection title="Programming Languages" data={languages} />
          <SkillSection title="Frontend Development" data={frontend} />
          <SkillSection title="Backend Development" data={backend} />
        </div>
      </main>

      <Footer />
    </div>
  );
}

function SkillSection({ title, data }) {
  if (data.length === 0) return null;

  return (
    <section>
      <h2 className="text-2xl font-semibold mb-8 text-blue-main">
        {title}
      </h2>

      <div className="space-y-6">
        {data.map((skill) => (
         <div
              key={skill.id}
              className="
                group relative
                flex items-center gap-6
                rounded-2xl
                bg-blue-main/10
                border border-blue-main/30
                px-6 py-5
                shadow-md
               hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] hover:-translate-y-1 
                transition-all duration-300 
              "
            >
            
              <div className="absolute left-0 top-0 h-full w-1 rounded-l-2xl bg-gradient-to-b from-blue-main to-blue-dark opacity-70" />

              <div
                className="
                  flex-shrink-0
                  w-14 h-14 rounded-xl
                  flex items-center justify-center
                  bg-bg-main/80
                  text-3xl text-blue-main
                  shadow
                  group-hover:scale-110 transition-transform
                "
              >
              {iconMap[skill.icon]}
            </div>

            <div className="flex-1">
              <h3 className="text-xl font-semibold text-text-main">
                {skill.name}
              </h3>

              <div className="mt-2 flex flex-col sm:flex-row sm:gap-8 gap-2 text-sm text-text-muted">
                <p>
                  <span className="text-text-main font-medium">Used in:</span>{" "}
                  {skill.appliedIn}
                </p>
                <p>
                  <span className="text-text-main font-medium">Focus:</span>{" "}
                  {skill.focus}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
