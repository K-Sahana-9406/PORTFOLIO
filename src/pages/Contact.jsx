import Navbar from "./Navbar";
import Footer from "./Footer";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Contact() {
  const contacts = [
    {
      icon: <FaEnvelope />,
      label: "email",
      value: "ksahana9406@gmail.com",
    },
    {
      icon: <FaPhone />,
      label: "phone",
      value: "+91 9025639476",
    },
    {
      icon: <FaGithub />,
      label: "github",
      value: "github.com/K-Sahana-9406",
      link: "https://github.com/K-Sahana-9406",
    },
    {
      icon: <FaLinkedin />,
      label: "linkedin",
      value: "linkedin.com/in/sahana9406",
      link: "https://linkedin.com/in/sahana9406",
    },
  ];

  return (
    <div className="bg-bg-main min-h-[100svh] flex flex-col overflow-hidden relative">
      <Navbar />

 
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(61,133,198,0.12),transparent_70%)] pointer-events-none" />

      <main className="relative pt-32 px-6 pb-12 max-w-6xl mx-auto w-full flex-1">
 
        <div className="mb-14 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-text-main">
          Get in Touch
          </h1>
          <p className="text-text-muted mt-4 max-w-xl">
           I’m always open to discussing new ideas, learning opportunities, and collaborations.
          </p>
        </div>

     <div
            className="relative bg-blue-main/10 border border-blue-main/30
            rounded-2xl p-3 md:p-5 backdrop-blur-md shadow-xl
            hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] transition"
          >
          
          
          <div className="flex items-center gap-3 px-3 py-2 border-b border-blue-main/20">
            <span className="w-3 h-3 bg-red-400 rounded-full" />
            <span className="w-3 h-3 bg-yellow-400 rounded-full" />
            <span className="w-3 h-3 bg-green-400 rounded-full" />
            <p className="ml-4 text-text-muted text-sm font-mono">
              sahana@portfolio ~ contact
            </p>
          </div>

       
          <div className="p-8 space-y-6 font-mono text-sm sm:text-base">
            {contacts.map((c) => (
              c.link ? (
                <a
                  key={c.label}
                  href={c.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex gap-4 p-4 rounded-lg hover:bg-blue-main/10 hover:translate-x-1 transition-all duration-300"
                >
                  <span className="text-blue-main text-xl mt-1">{c.icon}</span>
                  <div>
                    <p className="text-text-main flex items-center gap-1">
                      <span className="text-blue-light animate-pulse"> $</span> {c.label}
                    </p>
                    <p className="text-text-muted break-all">{c.value}</p>
                  </div>
                </a>
              ) : (
                <div
                  key={c.label}
                  className="flex gap-4 p-4 rounded-lg hover:bg-blue-main/10 hover:translate-x-1 transition-all duration-300"
                >
                  <span className="text-blue-main text-xl mt-1">{c.icon}</span>
                  <div>
                    <p className="text-text-main flex items-center gap-1">
                      <span className="text-blue-light animate-pulse"> $</span> {c.label}
                    </p>
                    <p className="text-text-muted break-all">{c.value}</p>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
