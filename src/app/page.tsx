import {
  ChevronRight,
  Code2,
  Database,
  ExternalLink,
  FileText,
  Layout,
  Mail,
  Terminal,
} from "lucide-react";

export default function Home() {
  const projects = [
    {
      title: "Hệ Thống Điểm Danh AI",
      description:
        "Ứng dụng nhận diện khuôn mặt để điểm danh võ sinh tự động, xử lý logic học phí phức tạp.",
      techStack: ["Python", "FastAPI", "PostgreSQL", "React"],
      demoLink: "#",
      caseStudy: "#",
    },
    {
      title: "E-Commerce Platform",
      description:
        "Nền tảng bán hàng đa kênh với khả năng xử lý hàng nghìn giao dịch mỗi giây.",
      techStack: ["NodeJS", "NestJS", "VueJs", "PostgreSQL"],
      demoLink: "#",
      caseStudy: "#",
    },
    {
      title: "Mobile Fitness App",
      description:
        "Ứng dụng theo dõi sức khỏe và lịch trình tập luyện thời gian thực.",
      techStack: ["React Native", "Firebase", "Supabase"],
      demoLink: "#",
      caseStudy: "#",
    },
  ];
  const techStack = [
    {
      category: "Frontend",
      icon: <Layout className="w-6 h-6 text-blue-500" />,
      items: ["React", "React Native", "VueJs"],
    },
    {
      category: "Backend",
      icon: <Terminal className="w-6 h-6 text-green-500" />,
      items: ["NodeJs", "NestJs", "Python"],
    },
    {
      category: "Database",
      icon: <Database className="w-6 h-6 text-purple-500" />,
      items: ["PostgreSQL"],
    },
    {
      category: "Tools",
      icon: <Code2 className="w-6 h-6 text-orange-500" />,
      items: ["Git", "GitHub", "Vercel", "Render", "Firebase", "Supabase"],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-bold text-xl tracking-tight text-blue-600">
            Quý.Dev
          </span>
          <div className="space-x-8 hidden md:flex font-medium">
            <a href="#projects" className="hover:text-blue-600 transition">
              Projects
            </a>
            <a href="#techstack" className="hover:text-blue-600 transition">
              TechStack
            </a>
            <a href="#contact" className="hover:text-blue-600 transition">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="py-24 px-6 max-w-6xl mx-auto text-center md:text-left flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-2/3">
          <h2 className="text-blue-600 font-semibold mb-2">Xin chào, tôi là</h2>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-slate-900">
            Nguyễn Văn Quý
          </h1>
          <h3 className="text-2xl md:text-3xl font-medium text-slate-600 mb-6">
            Software Engineer
          </h3>
          <p className="text-lg text-slate-500 mb-10 max-w-xl leading-relaxed">
            Biến các ý tưởng phức tạp thành giải pháp kỹ thuật đơn giản và dễ mở
            rộng. Tôi tập trung vào hiệu năng và trải nghiệm người dùng cuối.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 flex items-center justify-center gap-2"
            >
              Xem Projects <ChevronRight size={20} />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-white border border-slate-200 text-slate-700 rounded-xl font-semibold hover:bg-slate-50 transition-all flex items-center justify-center"
            >
              Liên hệ với tôi
            </a>
          </div>
        </div>
        <div className="hidden md:block w-1/3 relative">
          <div className="w-64 h-64 bg-blue-100 rounded-full absolute -top-4 -right-4 animate-pulse"></div>
          <div className="w-64 h-64 bg-slate-200 rounded-3xl relative z-10 overflow-hidden shadow-2xl rotate-3">
            <img
              src="/api/placeholder/400/400"
              alt="Avatar"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </header>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Dự Án Tiêu Biểu</h2>
              <div className="w-20 h-1.5 bg-blue-600 rounded-full"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group border border-slate-100 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 bg-slate-50 hover:-translate-y-2"
              >
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition">
                  {project.title}
                </h3>
                <p className="text-slate-500 mb-6 text-sm leading-relaxed h-12 overflow-hidden">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-white text-blue-600 text-xs font-semibold rounded-full border border-blue-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 pt-4 border-t border-slate-200">
                  <a
                    href={project.demoLink}
                    className="text-sm font-bold flex items-center gap-1 text-slate-700 hover:text-blue-600"
                  >
                    <ExternalLink size={16} /> Demo
                  </a>
                  <a
                    href={project.caseStudy}
                    className="text-sm font-bold flex items-center gap-1 text-slate-700 hover:text-blue-600"
                  >
                    <FileText size={16} /> Case Study
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TechStack Section */}
      <section id="techstack" className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Kỹ Năng Chuyên Môn</h2>
          <p className="text-slate-500">
            Các công nghệ tôi sử dụng để xây dựng sản phẩm
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {techStack.map((stack, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
            >
              <div className="mb-4 flex justify-center">{stack.icon}</div>
              <h4 className="text-lg font-bold mb-6 text-center">
                {stack.category}
              </h4>
              <ul className="space-y-3">
                {stack.items.map((item, i) => (
                  <li
                    key={i}
                    className="text-slate-600 text-center text-sm font-medium py-2 px-3 bg-slate-50 rounded-lg"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <footer id="contact" className="py-20 px-6 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4">
              Hãy cùng tạo nên điều gì đó tuyệt vời!
            </h2>
            <p className="text-slate-400 mb-8">
              Tôi luôn sẵn sàng thảo luận về các dự án mới hoặc cơ hội hợp tác.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <a
                href="mailto:email@example.com"
                className="flex items-center gap-3 hover:text-blue-400 transition group"
              >
                <div className="p-3 bg-slate-800 rounded-full group-hover:bg-blue-900 transition">
                  <Mail size={24} />
                </div>
                <span>nguyenvanquy@email.com</span>
              </a>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 hover:text-blue-400 transition group"
              >
                <div className="p-3 bg-slate-800 rounded-full group-hover:bg-blue-900 transition">
                  {/* <Github size={24} /> */}
                </div>
                <span>github.com/nguyenvanquy</span>
              </a>
            </div>
          </div>
          <div className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Nguyễn Văn Quý. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
