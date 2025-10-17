import { Instagram, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 inset-x-0 w-full py-4 px-6 bg-transparent text-white font-averia text-sm flex justify-center items-center gap-6 z-50"> 
      <a
        href="https://www.instagram.com/__mrs.reyes/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="hover:text-pink-400 transition-colors duration-300"
      >
        <Instagram size={25} />
      </a>
      <a
        href="https://www.linkedin.com/in/karina-lorenzo/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="hover:text-blue-400 transition-colors duration-300"
      >
        <Linkedin size={25} />
      </a>
      <a
        href="https://github.com/karinalorenzo"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="hover:text-gray-400 transition-colors duration-300"
      >
        <Github size={25} />
      </a>
    </footer>
  );
};

export default Footer;
