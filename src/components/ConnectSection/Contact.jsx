import { FaGithub, FaLinkedin, FaPaperclip } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

export default function Contact() {
  return (
    <section className="w-full max-w-3xl h-auto md:mt-0 flex flex-col gap-12 mb-10 ">
      <div>
        <h3 className="font-article font-extrabold ">Contact</h3>
      </div>
      <div className="w-full max-w-200 flex flex-col border-l-2 border-primary/20">
        {socialLinks.map((link, i) => (
          <section key={i} className="w-full h-8 p-4 flex items-center ">
            <a href={link.url} className="flex gap-2 items-center" target="_blank">
              {link.name} <link.icon />
            </a>
          </section>
        ))}
      </div>
    </section>
  );
}

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/RandyTylor69",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/christopher-mao-2414752a8/",
    icon: FaLinkedin,
  },
  {
    name: "Email",
    url: "mailto:ziyinmao2006@gmail.com",
    icon: IoIosMail,
  },
];
