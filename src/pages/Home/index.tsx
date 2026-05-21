import { useEffect, useState } from "react";
import {
  Moon,
  Sun,
  Link,
  ArrowDown,
} from "lucide-react";

export default function Home() {
  const components = [
    {
      name: "Province Map Of Angola",
      image: "mapAngola.png",
      GitHub:
        "https://github.com/Bellbelliones/guzmancomponents/tree/main/src/components/Maps",
    },
  ];

  const names = [
    "RODOLFO GUZMAN",
    "FULL-STACK DEV",
    "GAMER DEVELOPER",
    "REACT DEVELOPER",
    "REACT NATIVE DEVELOPER",
    "BOT CREATOR",
    "VUE DEVELOPER",
    "ANGOLAN CREATOR",
  ];

  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  // THEME
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const current = names[loopNum % names.length];

    const timeout = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? current.substring(0, prev.length - 1)
          : current.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === current) {
        setTimeout(() => setIsDeleting(true), 1200);
      }

      if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum((prev) => prev + 1);
      }
    }, isDeleting ? 50 : 120);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, loopNum]);

  return (
    <div
      className={`min-h-screen overflow-hidden transition-all duration-500 ${
        darkMode
          ? "bg-[#0F0F0F] text-white"
          : "bg-[#F5F5F5] text-[#111111]"
      }`}
    >
      <style>{`
        @keyframes blink {
          50% {
            border-color: transparent;
          }
        }

        @keyframes floatCard {
          0%, 100% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes doubleJump {
          0%, 100% {
            transform: translateY(0);
          }

          15% {
            transform: translateY(-12px);
          }

          30% {
            transform: translateY(0);
          }

          45% {
            transform: translateY(-8px);
          }

          60% {
            transform: translateY(0);
          }
        }

        .typing-text {
          overflow: hidden;
          white-space: nowrap;
          border-right: 3px solid #F7C600;
          animation: blink .8s infinite;
        }

        .component-card {
          animation: floatCard 5s ease-in-out infinite;
        }

        .component-card:hover {
          transform: translateY(-10px) scale(1.02);
        }

        .component-card:nth-child(1) {
          animation:
            floatCard 5s ease-in-out infinite,
            doubleJump 2s ease-in-out 120s infinite;
        }
      `}</style>

      {/* THEME BUTTON */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`fixed z-50 top-5 right-5 p-4 rounded-2xl backdrop-blur-xl border transition-all duration-300 shadow-2xl ${
          darkMode
            ? "bg-[#1A1A1A]/80 border-[#2A2A2A] hover:bg-[#232323]"
            : "bg-white/80 border-[#DDDDDD] hover:bg-[#EEEEEE]"
        }`}
      >
        {darkMode ? (
          <Sun size={22} className="text-[#F7C600]" />
        ) : (
          <Moon size={22} className="text-[#111111]" />
        )}
      </button>

      {/* HERO */}
      <section className="relative flex items-center justify-center min-h-screen px-5 py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#CC092F25,transparent_40%)]"></div>

        <div className="relative z-10 flex flex-col items-center text-center w-full max-w-6xl">

          {/* PROFILE */}
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-[#CC092F] blur-3xl opacity-30 rounded-full"></div>

            <img
              src="me.png"
              alt="profile"
              className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-full object-cover border-4 border-[#262626] shadow-2xl"
            />
          </div>

          {/* NAME */}
          <div className="h-20 sm:h-24 flex items-center justify-center mb-5 w-full">
            <h1 className="typing-text text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-[#F7C600] tracking-[0.15em] uppercase max-w-full">
              {text}
            </h1>
          </div>

          {/* DESCRIPTION */}
          <p
            className={`max-w-3xl text-sm sm:text-base md:text-lg leading-relaxed px-2 ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Full-stack developer focused on creating modern,
            immersive and highly interactive interfaces.
            This platform showcases reusable components,
            creative UI systems and unique experiences built
            with React and Tailwind CSS.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-10 w-full sm:w-auto">

            <a
              href="https://github.com/Bellbelliones/guzmancomponents/"
              target="_blank"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-[#CC092F] hover:bg-[#a10624] transition-all duration-300 font-semibold shadow-2xl"
            >
              <Link size={20} />
              Explore Link
            </a>

            <a
              href="#components"
              className={`w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-4 rounded-2xl border transition-all duration-300 font-semibold ${
                darkMode
                  ? "border-[#2A2A2A] bg-[#1A1A1A] hover:bg-[#202020]"
                  : "border-[#DDDDDD] bg-white hover:bg-[#F0F0F0]"
              }`}
            >
              <ArrowDown size={18} />
              View Components
            </a>
          </div>
        </div>
      </section>

      {/* COMPONENTS */}
      <section
        id="components"
        className="relative px-5 sm:px-8 md:px-12 lg:px-20 py-20"
      >
        <div className="max-w-7xl mx-auto">

          {/* TITLE */}
          <div className="mb-14 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-5">
              Featured Components
            </h2>

            <p
              className={`max-w-2xl mx-auto text-sm sm:text-base md:text-lg ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Explore beautiful and reusable UI components designed
              for modern applications.
            </p>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">

            {components.map((component, index) => (
              <div
                key={index}
                className={`component-card group relative overflow-hidden rounded-3xl border transition-all duration-500 shadow-2xl ${
                  darkMode
                    ? "bg-[#1A1A1A] border-[#262626]"
                    : "bg-white border-[#DDDDDD]"
                }`}
              >

                {/* IMAGE */}
                <div className="relative h-52 sm:h-56 md:h-64 overflow-hidden">

                  <img
                    src={component.image}
                    alt={component.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
                </div>

                {/* CONTENT */}
                <div className="relative p-5 sm:p-6">

                  <h3 className="text-xl sm:text-2xl font-bold mb-3 group-hover:text-[#F7C600] transition-all duration-300">
                    {component.name}
                  </h3>

                  <p
                    className={`leading-relaxed mb-6 text-sm sm:text-base ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Modern and responsive React component crafted
                    with attention to performance, UI and user experience.
                  </p>

                  <a
                    href={component.GitHub}
                    target="_blank"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#CC092F] hover:bg-[#a10624] transition-all duration-300 font-medium"
                  >
                    <Link size={18} />
                    Link Repository
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className={`border-t py-8 text-center text-sm sm:text-base ${
          darkMode
            ? "border-[#1F1F1F] text-gray-500"
            : "border-[#DDDDDD] text-gray-600"
        }`}
      >
        Built with React, Tailwind CSS and creativity.
      </footer>
    </div>
  );
}