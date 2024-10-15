import { ReactNode } from "react";
import { FaGithub, FaCode, FaLinkedinIn } from "react-icons/fa6";
import { name } from "./nav";

const YEAR = new Date().getFullYear();

const links = {
  github: "https://github.com/mellevanderlinde",
  linkedin: "https://linkedin.com/in/mellevdlinde",
  source: "https://github.com/mellevanderlinde/portfolio",
};

function Link({ href, icon: Icon }): ReactNode {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Icon />
    </a>
  );
}

function Links(): ReactNode {
  return (
    <div className="flex text-lg gap-3.5 float-right transition-opacity duration-300 hover:opacity-90">
      <Link href={links.github} icon={FaGithub} />
      <Link href={links.linkedin} icon={FaLinkedinIn} />
      <Link href={links.source} icon={FaCode} />
    </div>
  );
}

export default function Footer(): ReactNode {
  return (
    <small
      className="block lg:mt-24 mt-16 text-[#1C1C1C] dark:text-[#D4D4D4]"
      style={{ viewTransitionName: "footer" }}
    >
      <time>© {YEAR}</time> {name}
      <Links />
    </small>
  );
}
