import Navbar from "./Navbar";
import Footer from "./Footer";
export default function Home() {
  return (
    <div className="bg-bg-main text-text-main min-h-[100svh] overflow-hidden">
      <Navbar />

     
      <section className="relative min-h-[100svh] flex items-center px-8 md:px-24 pt-24">
      
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] 
          bg-blue-main/20 rounded-full blur-[120px]" />

        <div className="relative w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

      
          <div className="flex flex-col items-center md:items-start text-center md:text-left">

            <span className="text-blue-light text-xs tracking-[0.3em] uppercase">
              Aspiring Software Engineer
            </span>

              <span className=" mt-4 text-4xl sm:text-5xl xl:text-6xl font-extrabold leading-tight">Sahana Kathiresan</span>
            

            <h2 className="mt-4 text-lg sm:text-xl text-text-muted">
              MERN Stack Developer • DSA Enthusiast
            </h2>

      
            <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-6">
              {["MERN", "LeetCode", "GFG", "Clean UI", "Problem Solving"].map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs rounded-full
                  bg-blue-main/10 text-blue-main border border-blue-main/30"
                >
                  {tag}
                </span>
              ))}
            </div>

      
            <p className="mt-8 max-w-lg text-text-muted leading-relaxed">
              I build <span className="text-blue-main font-medium">scalable, clean, and user-focused web applications</span>.
              Strong in fundamentals, passionate about problem-solving, and
              consistently improving through DSA and real-world projects.
            </p>

  
            <div className="flex gap-8 mt-8">
              <div>
                <h3 className="text-2xl font-bold text-blue-main">100+</h3>
                <p className="text-xs text-text-muted">DSA Problems</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-main">5+</h3>
                <p className="text-xs text-text-muted">Projects Built</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-main">2026</h3>
                <p className="text-xs text-text-muted">Placement Focus</p>
              </div>
            </div>

        
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-10">
              <a
                href="https://github.com/K-Sahana-9406/"
                target="_blank"
                rel="noreferrer"
                className="btn-outline"
              >
                GitHub
              </a>

              <a
                href="https://linkedin.com/in/sahana9406"
                target="_blank"
                rel="noreferrer"
                className="btn-outline"
              >
                LinkedIn
              </a>

              <a
                href="https://leetcode.com/u/Sahana_9406/"
                target="_blank"
                rel="noreferrer"
                className="btn-outline"
              >
                LeetCode
              </a>

              <a
                href="https://www.geeksforgeeks.org/profile/ksahanstc4?tab=activity"
                target="_blank"
                rel="noreferrer"
                className="btn-outline"
              >
                GFG
              </a>

             <a
                href="/assets/SAHANA_RESUME.pdf"
                target="_blank"
                onClick={() => setOpen(false)}
                className="bg-gradient-to-r from-blue-dark to-blue-main text-white px-6 py-2 rounded-lg shadow-md hover:shadow-[0_0_25px] transition"
              >
                Resume
              </a>
            </div>

            <p className="mt-6 text-xs text-text-muted italic">
              Building my way to top product-based companies 
            </p>
          </div>

         
          <div className="relative flex justify-center">
          
            <div className="absolute w-80 h-80 bg-gradient-to-r 
              from-blue-dark via-blue-main to-blue-dark 
              rounded-full blur-3xl opacity-40 animate-pulse" />

            <img
              src="/assets/sahana1.webp"
              alt="Sahana Kathiresan"
              className="relative  w-60 h-60 sm:w-72 sm:h-72 object-cover rounded-full
              border-4 border-blue-main/50 shadow-2xl"
            />
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}