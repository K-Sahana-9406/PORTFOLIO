import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
  { name: "Education", path: "/education" },
     { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-bg-card/80 backdrop-blur border-b border-blue-main/20">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-text-main font-bold text-xl">
          Sah<span className="text-blue-main">ana.K</span>
        </div>

      
        <ul className="hidden md:flex items-center gap-8 text-sm text-text-muted">
          {navItems.map((item) => (
            <li key={item.name} className="hover:text-blue-light transition cursor-pointer">
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}

          <li>
              <a
                href="/assets/SAHANA_RESUME.pdf"
                target="_blank"
                onClick={() => setOpen(false)}
                className="bg-gradient-to-r from-blue-dark to-blue-main text-white px-6 py-2 rounded-lg shadow-md hover:shadow-[0_0_25px] transition"
              >
                Resume
              </a>
          </li>
        </ul>

      
        <button onClick={() => setOpen(!open)} className="md:hidden text-text-main text-2xl">
          &#9776;

        </button>
      </nav>

      
      {open && (
        <div className="md:hidden bg-bg-card border-t border-blue-main/20">
          <ul className="flex flex-col items-center gap-6 py-6 text-text-muted text-sm">
            {navItems.map((item) => (
              <li key={item.name} onClick={() => setOpen(false)} className="hover:text-blue-light transition cursor-pointer">
                <Link to={item.path}>{item.name}</Link>
              </li>
            ))}
            <li>
              <a
                href="/assets/SAHANA_RESUME.pdf"
                target="_blank"
                onClick={() => setOpen(false)}
                className="bg-gradient-to-r from-blue-dark to-blue-main text-white px-6 py-2 rounded-lg shadow-md hover:shadow-[0_0_25px] transition"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
