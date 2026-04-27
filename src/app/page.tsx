import Navbar from "@/components/Navbar";
import TextAnimate from "@/components/TextAnimate";
import { FaGithub, FaFacebookF } from "react-icons/fa";
import {
  ArrowUpRight,
  Briefcase,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Code2,
  Cpu,
  Database,
  ExternalLink,
  FileText,
  GitBranch,
  GitBranchPlus,
  Layout,
  Link,
  ListEnd,
  Mail,
  MapPin,
  Send,
  Server,
  Terminal,
} from "lucide-react";

export default function Home() {
  const projects = [
    {
      image: "https://raw.githubusercontent.com/quyng24/pdtwd/refs/heads/master/src/app/favicon.ico?token=GHSAT0AAAAAADZXBQ3WBLRKIH7VND4BMO4C2PPDKRQ",
      title: "Taekwondo Club Management System",
      description:
        "Ứng dụng nhận diện khuôn mặt để điểm danh võ sinh tự động, xử lý logic học phí phức tạp.",
      techStack: ["Python", "FastAPI", "PostgreSQL", "Next.Js"],
      demoLink: "https://panda-taekwondo.vercel.app",
      githubLink: "",
      caseStudy: "#",
    },
    {
      image: "",
      title: "E-Commerce Platform",
      description:
        "Nền tảng bán hàng đa kênh với khả năng xử lý hàng nghìn giao dịch mỗi giây.",
      techStack: ["NodeJS", "NestJS", "VueJs", "PostgreSQL"],
      demoLink: "#",
      githubLink: "",
      caseStudy: "#",
    },
    {
      image: "",
      title: "Mobile Fitness App",
      description:
        "Ứng dụng theo dõi sức khỏe và lịch trình tập luyện thời gian thực.",
      techStack: ["React Native", "Firebase", "Supabase"],
      demoLink: "#",
      githubLink: "",
      caseStudy: "#",
    },
  ];

  const experiences = [
    {
      company: "Công ty ABC",
      role: "Software Engineer",
      period: "2022 - 2024",
      description: [
        "Phát triển ứng dụng web bằng React và NodeJs.",
        "Tối ưu hiệu năng hệ thống, giảm thời gian phản hồi xuống 30%.",
        "Triển khai CI/CD với GitHub Actions và Vercel."
      ],
      skills: ["React", "Node.js", "CI/CD", "AWS"]
    },
    {
      company: "Công ty XYZ",
      role: "Frontend Developer",
      period: "2020 - 2022",
      description: [
        "Xây dựng giao diện người dùng bằng VueJs và React Native.",
        "Tích hợp API backend và tối ưu trải nghiệm người dùng.",
        "Hợp tác với nhóm thiết kế để cải thiện UI/UX."
      ],
      skills: ["VueJS", "React Native", "Tailwind", "Figma"]
    }
  ];

  const techStack = [
    {
      category: "Frontend",
      icon: <Layout className="text-blue-500" size={28} />,
      items: ["React", "Next.js", "VueJs", "Tailwind CSS", "TypeScript"],
      color: "border-t-blue-500"
    },
    {
      category: "Backend",
      icon: <Server className="text-emerald-500" size={28} />,
      items: ["Node.js", "Express", "NestJS", "PostgreSQL", "Python", "FastApi"],
      color: "border-t-emerald-500"
    },
    {
      category: "DevOps",
      icon: <Cpu className="text-orange-500" size={28} />,
      items: ["Docker", "Render", "GitHub Actions", "Vercel"],
      color: "border-t-orange-500"
    },
    {
      category: "Tools",
      icon: <Terminal className="text-purple-500" size={28} />,
      items: ["Git", "Github", "Figma", "Postman", "Jest", "Supabase", "Firebase"],
      color: "border-t-purple-500"
    },
  ];

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-slate-50 text-slate-900 font-sans">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <header className="relative py-16 px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:py-24">
        {/* Phần ảnh đại diện - Hiển thị cả trên Mobile (đưa lên trước) và Desktop */}
        <div className="relative order-first md:order-last w-full md:w-1/3 flex justify-center">
          {/* Decor nền */}
          <div className="absolute inset-0 bg-blue-100 rounded-full blur-3xl opacity-50 scale-150 animate-pulse"></div>

          <div className="relative z-10">
            <div className="w-48 h-48 md:w-72 md:h-72 bg-white p-3 rounded-3xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="w-full h-full rounded-2xl overflow-hidden bg-slate-100">
                <img
                  src="/images/avatar_portfolio.jpg"
                  alt="Nguyễn Văn Quý"
                  className="object-cover w-full h-full hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Badge trang trí nhỏ (Optional) */}
            <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-2 animate-bounce">
              <span className="flex h-3 w-3 rounded-full bg-green-500"></span>
              <span className="text-sm font-bold text-slate-700">Available for work</span>
            </div>
          </div>
        </div>

        {/* Nội dung text */}
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
            Transform complex ideas into simple, scalable technical solutions.
            I focus on <span className="text-slate-800 font-medium">performance</span> and
            <span className="text-slate-800 font-medium"> user experience</span>.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="group px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 flex items-center justify-center gap-2 active:scale-95"
            >
              View Projects
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
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
      <section id="projects" className="py-24 px-4 bg-slate-50/50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto">
          {/* Header (Giữ nguyên) */}
          <div className="mb-16">
            <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
              Projects <span className="text-blue-600">Featured</span>
            </h2>
            <div className="w-20 h-1.5 bg-blue-600 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Image Preview Container */}
                <div className="relative aspect-video overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-slate-400">
                      No Image Preview
                    </div>
                  )}

                  {/* Desktop Overlay: Chỉ hiện trên màn hình md trở lên */}
                  <div className="absolute inset-0 bg-slate-900/60 opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 hidden md:flex items-center justify-center gap-4">
                    <a href={project.demoLink} target="_blank" className="p-3 bg-white rounded-full text-slate-900 hover:bg-blue-600 hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0">
                      <ExternalLink size={20} />
                    </a>
                    <a href={project.githubLink !== "" ? project.demoLink : ""} target="_blank" className="p-3 bg-white rounded-full text-slate-900 hover:bg-blue-600 hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 delay-75">
                      <Link size={20} />
                    </a>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 flex flex-col grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, i) => (
                      <span key={i} className="text-[10px] uppercase font-bold px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 line-clamp-1">
                    {project.title}
                  </h3>

                  <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Mobile Action Buttons: Hiển thị rõ ràng trên Mobile, ẩn trên Desktop */}
                  <div className="grid grid-cols-2 gap-3 mb-6 md:hidden">
                    <a href={project.demoLink} target="_blank" className="flex items-center justify-center gap-2 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-bold active:scale-95 transition-transform">
                      <ExternalLink size={16} /> Demo
                    </a>
                    <a href={project.githubLink !== "" ? project.demoLink : ""} target="_blank" className="flex items-center justify-center gap-2 py-2.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-xl text-sm font-bold active:scale-95 transition-transform">
                      <Link size={16} /> Github
                    </a>
                  </div>

                  <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
                    <a
                      href={project.caseStudy}
                      className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-300 hover:text-blue-600"
                    >
                      <FileText size={18} className="text-blue-600" />
                      Case Study
                    </a>
                    <ArrowUpRight size={18} className="text-slate-400 md:group-hover:text-blue-600 transition-colors" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="py-24 bg-white dark:bg-slate-950 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
              Work <span className="text-blue-600">Experience</span>
            </h2>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          {/* Timeline Container */}
          <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">

            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">

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
                      <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                        <CheckCircle2 size={16} className="text-blue-500 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Tech Skills Tags */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200/60 dark:border-slate-800">
                    {exp.skills?.map((skill, i) => (
                      <span key={i} className="text-[10px] font-bold px-2 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md text-slate-500 uppercase">
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
      <section id="techstack" className="py-24 px-4 bg-slate-50/50 dark:bg-slate-950">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white">
              Skills <span className="text-blue-600">Expertise</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-lg mx-auto">
              These are the tools and languages ​​I have mastered during the process of building real-world projects.
            </p>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          {/* Grid Container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {techStack.map((stack, index) => (
              <div
                key={index}
                className={`group bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border-t-4 ${stack.color} border-l border-r border-b border-slate-100 dark:border-slate-800 transition-all duration-300 hover:shadow-xl hover:-translate-y-2`}
              >
                {/* Icon Container */}
                <div className="mb-6 flex justify-center">
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl group-hover:scale-110 group-hover:bg-white dark:group-hover:bg-slate-700 transition-all duration-300 shadow-inner">
                    {stack.icon}
                  </div>
                </div>

                {/* Title */}
                <h4 className="text-xl font-bold mb-6 text-center text-slate-800 dark:text-white">
                  {stack.category}
                </h4>

                {/* Skills Badge Cloud */}
                <div className="flex flex-wrap justify-center gap-2">
                  {stack.items.map((item, i) => (
                    <span
                      key={i}
                      className="text-xs font-bold py-1.5 px-3 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-lg border border-slate-100 dark:border-slate-700 group-hover:border-blue-200 dark:group-hover:border-blue-900 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Thêm một phần Footer nhỏ cho TechStack */}
          <div className="mt-16 text-center">
            <p className="text-sm text-slate-400 italic">
              And many other supporting libraries/tools depending on the project requirements...
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <footer id="contact" className="relative bg-slate-950 pt-24 pb-12 overflow-hidden">
        {/* Hiệu ứng nền mờ tạo chiều sâu */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden opacity-20">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 mb-20">

            {/* Left Side: Call to Action */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                  Ready for those <br />
                  <span className="text-blue-500">new challenges?</span>
                </h2>
                <p className="text-slate-400 text-lg max-w-md">
                  I'm always open to discussing potential projects or innovative ideas. Don't hesitate to contact me!
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="grid gap-4">
                <a href="mailto:nguyenvanquy@email.com" className="group flex items-center gap-4 p-4 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 transition-all duration-300">
                  <div className="p-3 bg-blue-500/10 rounded-xl group-hover:bg-blue-500 text-blue-500 group-hover:text-white transition-all">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Send Email</p>
                    <p className="text-white font-medium">quy24.dev@gmail.com</p>
                  </div>
                  <ArrowUpRight className="ml-auto text-slate-600 group-hover:text-blue-500 transition-colors" size={20} />
                </a>

                <div className="group flex items-center gap-4 p-4 rounded-2xl bg-slate-900/50 border border-slate-800 transition-all">
                  <div className="p-3 bg-slate-800 rounded-xl text-slate-400">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Location</p>
                    <p className="text-white font-medium">Ha Noi, Viet Nam</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Social & Quick Links */}
            <div className="flex flex-col justify-between">
              <div className="grid grid-cols-2 gap-8 md:gap-16">
                <div className="space-y-6">
                  <h4 className="text-white font-bold text-lg">Social Media</h4>
                  <ul className="space-y-4">
                    <li>
                      <a href="https://github.com/quyng24" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                        <FaGithub size={20} /> GitHub
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/quyngdz24" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                        <FaFacebookF size={20} /> FaceBook
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="space-y-6">
                  <h4 className="text-white font-bold text-lg">Navigation</h4>
                  <ul className="space-y-4">
                    <li><a href="#projects" className="text-slate-400 hover:text-white transition-colors">Project</a></li>
                    <li><a href="#techstack" className="text-slate-400 hover:text-white transition-colors">Skill</a></li>
                  </ul>
                </div>
              </div>

              {/* "Say Hello" Button - Call to Action lớn */}
              <div className="mt-12 lg:mt-0">
                <a href="mailto:quy24.dev@gmail.com" className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-lg shadow-blue-600/20 transition-all active:scale-95 group">
                  Say hi!
                  <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white">Q</div>
              <span className="text-slate-200 font-bold tracking-tight">Quy.Dev</span>
            </div>

            <div className="text-slate-500 text-sm">
              © {new Date().getFullYear()} Nguyen Van Quy. All rights reserved.
            </div>

            <div className="flex gap-6 text-sm text-slate-500">
              <span className="hover:text-blue-500 transition-colors cursor-pointer">Privacy Policy</span>
              <span className="hover:text-blue-500 transition-colors cursor-pointer">Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
