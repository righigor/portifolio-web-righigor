import linkedinAnimation from "@/icons/social icons/linkedin.json";
import githubAnimation from "@/icons/social icons/github.json";
import instagramAnimation from "@/icons/social icons/instagram.json";
import emailAnimation from "@/icons/social icons/mail.json";
import AnimateIcons from "../animateIcons";

export default function Footer() {
  return (
    <footer className="bg-blue-500 text-black p-8 flex flex-col items-center justify-center space-y-8">
      <div className="flex justify-center space-x-4">
        <a
          href="https://www.linkedin.com/in/igor-righi/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AnimateIcons
            animationData={linkedinAnimation}
            size={35}
            loopAnimation
          />
        </a>
        <a
          href="https://github.com/righigor"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AnimateIcons
            animationData={githubAnimation}
            size={35}
            loopAnimation
          />
        </a>
        <a
          href="https://www.instagram.com/righigor/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AnimateIcons animationData={instagramAnimation} size={35} />
        </a>
        <a href="mailto:righigordev@gmail.com">
          <AnimateIcons animationData={emailAnimation} size={35} />
        </a>
      </div>
      <div className="text-center text-xs">
        <p>© Todos os direitos reservados</p>
        <p>Desenvolvido por @righigor 2025</p>
      </div>
    </footer>
  );
}
