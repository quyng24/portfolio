import Navbar from "@/components/Navbar";
import TextAnimate from "@/components/TextAnimate";
import { Briefcase, Calendar, CheckCircle2, ChevronRight } from "lucide-react";
import Footer from "@/components/Footer";
import TechStack from "@/components/TechStack";
import Image from "next/image";
import { ProjectsSection } from "@/components/ProjectsSection";

export default function Home() {
  const experiences = [
    {
      company: "LG CNS Viet Nam",
      role: "Software Engineer",
      period: "2024 - Present",
      description: [
        "Develop and maintain web interfaces using ReactJS and NextJS.",
        "Build reusable and responsive UI components using Figma design principles.",
        "Integrate REST APIs to process and display user data.",
        "It supports optimized performance and improves the user experience across multiple devices.",
        "Collaborate with the team to develop and fix system features.",
      ],
      skills: [
        "ReactJS",
        "NextJS",
        "TypeScript",
        "TailwindCSS",
        "Python",
        "Kotlin",
        "Jet Compose",
        "Git",
      ],
    },
  ];

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-slate-50 text-slate-900 font-sans">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <header className="relative py-16 px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:py-24">
        <div className="relative order-first md:order-last w-full md:w-1/3 flex justify-center">
          <div className="absolute inset-0 bg-blue-100 rounded-full blur-3xl opacity-50 scale-150 animate-pulse"></div>

          <div className="relative z-10">
            <div className="w-48 h-48 md:w-72 md:h-72 bg-white dark:bg-slate-800 p-3 rounded-3xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-900">
                <Image
                  src="/images/avatar_portfolio.jpg"
                  alt="Nguyễn Văn Quý"
                  fill
                  priority
                  sizes="(max-width: 768px) 192px, 288px"
                  className="object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-2 animate-bounce">
              <span className="flex h-3 w-3 rounded-full bg-green-500"></span>
              <span className="text-sm font-bold text-slate-700">
                Available for work
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="w-full md:w-2/3 text-center md:text-left">
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-blue-50 text-blue-600 font-medium text-sm border border-blue-100">
            👋 Hello, I am
          </div>

          <TextAnimate />

          <h3 className="text-xl md:text-3xl font-semibold text-slate-700 mb-6 flex items-center justify-center md:justify-start gap-2">
            Software Engineer
            <span className="hidden md:inline-block w-12 h-1 bg-blue-600 rounded-full"></span>
          </h3>

          <p className="text-base md:text-lg text-slate-500 mb-10 max-w-xl leading-relaxed mx-auto md:mx-0">
            Transform complex ideas into simple, scalable technical solutions. I
            focus on{" "}
            <span className="text-slate-800 font-medium">performance</span> and
            <span className="text-slate-800 font-medium"> user experience</span>
            .
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="group px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 flex items-center justify-center gap-2 active:scale-95"
            >
              View Projects
              <ChevronRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>

            <a
              href="#contact"
              className="px-8 py-4 bg-white border-2 border-slate-100 text-slate-700 rounded-2xl font-bold hover:border-blue-600 hover:text-blue-600 transition-all flex items-center justify-center active:scale-95 shadow-sm"
            >
              Contact Me
            </a>
          </div>
        </div>
      </header>

      {/* Projects Section */}
      <ProjectsSection />

      <section
        id="experience"
        className="py-24 bg-white dark:bg-slate-950 px-6"
      >
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
              Work <span className="text-blue-600">Experience</span>
            </h2>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          {/* Timeline Container */}
          <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-transparent before:via-slate-300 before:to-transparent">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
              >
                {/* Icon / Bullet Point */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-blue-600 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform duration-300 group-hover:scale-125">
                  <Briefcase size={18} />
                </div>

                {/* Content Card */}
                <div className="w-[calc(100%-4rem)] md:w-[45%] bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {exp.company}
                    </h3>
                    <div className="flex items-center gap-1.5 text-sm font-semibold text-blue-600 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full w-fit">
                      <Calendar size={14} />
                      {exp.period}
                    </div>
                  </div>

                  <div className="text-lg font-medium text-slate-700 dark:text-slate-300 mb-4">
                    {exp.role}
                  </div>

                  <ul className="space-y-3 mb-6">
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-slate-600 dark:text-slate-400 text-sm leading-relaxed"
                      >
                        <CheckCircle2
                          size={16}
                          className="text-blue-500 shrink-0 mt-0.5"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Tech Skills Tags */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200/60 dark:border-slate-800">
                    {exp.skills?.map((skill, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-bold px-2 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md text-slate-500 uppercase"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TechStack Section */}
      <TechStack />

      {/* Contact Section */}
      <Footer />
    </div>
  );
}
