import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Education() {
  return (
    <div className="bg-bg-main text-text-main min-h-[100svh] overflow-hidden">
      <Navbar />

      <section className="relative min-h-[100svh] flex items-center px-8 md:px-24 pt-24">
        
 
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
          w-[450px] h-[450px] bg-blue-main/20 rounded-full blur-[120px]"
        />

        <div className="relative w-full max-w-6xl mx-auto">
  
          <div className="text-center mb-16">
            <span className="text-blue-light text-xs tracking-[0.3em] uppercase">
              Academic Background
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold">
              Education
            </h1>
            <p className="mt-4 text-text-muted max-w-xl mx-auto">
              My academic journey that built strong fundamentals in
              computer science and software development.
            </p>
          </div>

          <div
            className="relative bg-blue-main/10 border border-blue-main/30
            rounded-2xl p-8 md:p-10 backdrop-blur-md shadow-xl
            hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] transition"
          >
        
            <h2 className="text-2xl md:text-3xl font-semibold">
              Bachelor of Technology – Information Technology
            </h2>

         
            <p className="mt-3 text-blue-light text-lg">
              Government College of Technology (GCT)
            </p>

           
            <p className="mt-1 text-text-muted">
              2023 – 2027
            </p>

           
            <div className="mt-6 h-px w-full bg-blue-main/20" />

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm uppercase tracking-widest text-blue-light">
                  Focus Areas
                </h3>
                <ul className="mt-3 space-y-2 text-text-muted text-sm">
              <li>• Data Structures & Algorithms</li>
                  <li>• Web Development (MERN Stack)</li>
            <li>• Database Management Systems</li>
                </ul>
              </div>

      <div>
                <h3 className="text-sm uppercase tracking-widest text-blue-light">
                  Strength Built
                </h3>
                <ul className="mt-3 space-y-2 text-text-muted text-sm">
                  <li>• Problem Solving Mindset</li>
                  <li>• Strong CS Fundamentals</li>
                  <li>• Consistent Learning Habit</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
