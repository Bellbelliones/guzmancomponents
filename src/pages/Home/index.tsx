import { useEffect, useState } from "react";

export default function Home() {
  const components = [
    {
      name: "Province Map Of Angola",
      image: "mapAngola.png",
      github: "https://github.com/Bellbelliones/guzmancomponents/tree/main/src/components/Maps",
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
    <div className="min-h-screen bg-[#0F0F0F] text-white overflow-hidden">
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
          transform: translateY(-15px) scale(1.03);
        }

        .component-card:nth-child(1) {
          animation:
            floatCard 5s ease-in-out infinite,
            doubleJump 2s ease-in-out 120s infinite;
        }

        .component-card:nth-child(2) {
          animation:
            floatCard 6s ease-in-out infinite,
            doubleJump 2s ease-in-out 122s infinite;
        }

        .component-card:nth-child(3) {
          animation:
            floatCard 7s ease-in-out infinite,
            doubleJump 2s ease-in-out 124s infinite;
        }

        .component-card:nth-child(4) {
          animation:
            floatCard 5.5s ease-in-out infinite,
            doubleJump 2s ease-in-out 126s infinite;
        }
      `}</style>

      {/* HERO SECTION */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#CC092F20,transparent_35%)]"></div>

        <div className="relative z-10 max-w-5xl flex flex-col items-center">
          {/* PROFILE IMAGE */}
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-[#CC092F] blur-3xl opacity-30 rounded-full"></div>

            <img
              src="me.png"
              alt="profile"
              className="relative w-44 h-44 rounded-full object-cover border-4 border-[#262626] shadow-2xl"
            />
          </div>

          {/* TYPING NAME */}
          <div className="flex items-center justify-center h-24 mb-4">
            <h1 className="typing-text text-5xl md:text-7xl font-black text-[#F7C600] tracking-widest uppercase">
              {text}
            </h1>
          </div>

          {/* DESCRIPTION */}
          <p className="max-w-3xl text-gray-400 text-lg md:text-xl leading-relaxed">
            Full-stack developer focused on creating modern, immersive and highly
            interactive interfaces. This platform showcases reusable components,
            creative UI systems and unique experiences built with React and Tailwind CSS.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-5 mt-10">
            <a
              href="https://github.com"
              target="_blank"
              className="px-8 py-4 rounded-2xl bg-[#CC092F] hover:bg-[#a10624] transition-all duration-300 font-semibold shadow-2xl"
            >
              Explore Github
            </a>

            <a
              href="#components"
              className="px-8 py-4 rounded-2xl border border-[#2A2A2A] bg-[#1A1A1A] hover:bg-[#202020] transition-all duration-300 font-semibold"
            >
              View Components
            </a>
          </div>
        </div>
      </section>

      {/* COMPONENTS SECTION */}
      <section
        id="components"
        className="relative px-6 md:px-12 lg:px-20 py-24"
      >
        <div className="max-w-7xl mx-auto">
          {/* TITLE */}
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-5">
              Featured Components
            </h2>

            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Explore beautiful and reusable UI components designed for modern applications.
            </p>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
            {components.map((component, index) => (
              <div
                key={index}
                className="component-card group relative overflow-hidden rounded-3xl border border-[#262626] bg-[#1A1A1A] shadow-2xl transition-all duration-500"
              >
                {/* IMAGE */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={component.image}
                    alt={component.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F30] to-transparent"></div>
                </div>

                {/* CONTENT */}
                <div className="relative p-6">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-[#F7C600] transition-all duration-300">
                    {component.name}
                  </h3>

                  <p className="text-gray-400 leading-relaxed mb-6">
                    Modern and responsive React component crafted with attention
                    to performance, UI and user experience.
                  </p>

                  <a
                    href={component.github}
                    target="_blank"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#CC092F] hover:bg-[#a10624] transition-all duration-300 font-medium"
                  >
                    Github Repository
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#1F1F1F] py-10 text-center text-gray-500">
        Built with React, Tailwind CSS and creativity.
      </footer>
    </div>
  );
}