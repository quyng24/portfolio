import { Mail, Send, MapPin, ArrowUpRight } from "lucide-react";
import { FaFacebookF, FaGithub } from "react-icons/fa";
import { MdEmojiObjects } from "react-icons/md";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="relative bg-slate-950 pt-24 pb-12 overflow-hidden"
    >
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
                I&apos;m always open to discussing potential projects or
                innovative ideas. Don&apos;t hesitate to contact me!
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="grid gap-4">
              <a
                href="mailto:quy24.dev@gmail.com"
                className="group flex items-center gap-4 p-4 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="p-3 bg-blue-500/10 rounded-xl group-hover:bg-blue-500 text-blue-500 group-hover:text-white transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">
                    Send Email
                  </p>
                  <p className="text-white font-medium">quy24.dev@gmail.com</p>
                </div>
                <ArrowUpRight
                  className="ml-auto text-slate-600 group-hover:text-blue-500 transition-colors"
                  size={20}
                />
              </a>

              <div className="group flex items-center gap-4 p-4 rounded-2xl bg-slate-900/50 border border-slate-800 transition-all">
                <div className="p-3 bg-slate-800 rounded-xl text-slate-400">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">
                    Location
                  </p>
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
                    <a
                      target="_blank"
                      href="https://github.com/quyng24"
                      className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
                    >
                      <FaGithub size={20} /> GitHub
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://www.facebook.com/quyngdz24"
                      className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
                    >
                      <FaFacebookF size={20} /> FaceBook
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://project-sumary.vercel.app"
                      className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
                    >
                      <MdEmojiObjects size={20} /> Project Sumary
                    </a>
                  </li>
                </ul>
              </div>

              <div className="space-y-6">
                <h4 className="text-white font-bold text-lg">Navigation</h4>
                <ul className="space-y-4">
                  <li>
                    <a
                      href="#projects"
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      Project
                    </a>
                  </li>
                  <li>
                    <a
                      href="#techstack"
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      Skill
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* "Say Hello" Button - Call to Action lớn */}
            <div className="mt-12 lg:mt-0">
              <a
                href="mailto:quy24.dev@gmail.com"
                className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-lg shadow-blue-600/20 transition-all active:scale-95 group"
              >
                Say hi!
                <Send
                  size={20}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white">
              Q
            </div>
            <span className="text-slate-200 font-bold tracking-tight">
              Quy.Dev
            </span>
          </div>

          <div className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Nguyen Van Quy. All rights reserved.
          </div>

          <div className="flex gap-6 text-sm text-slate-500">
            <span className="hover:text-blue-500 transition-colors cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-blue-500 transition-colors cursor-pointer">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
