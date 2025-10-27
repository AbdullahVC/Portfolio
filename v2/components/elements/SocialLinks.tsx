"use client";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaInstagram,
  FaXTwitter,
  FaWhatsapp,
} from "react-icons/fa6";

const links = [
  { href: "https://github.com/AbdullahVC", Icon: FaGithub, label: "GitHub" },
  { href: "mailto:info@abdullahvcoskun.dev", Icon: FaEnvelope, label: "Email" },
  { href: "https://wa.me/905373545793", Icon: FaWhatsapp, label: "WhatsApp" },
  { href: "https://www.linkedin.com/in/abdullahvcoskun/", Icon: FaLinkedin, label: "LinkedIn" },
  {
    href: "https://www.instagram.com/abdullahveyselcoskun/",
    Icon: FaInstagram,
    label: "Instagram",
  },
  { href: "https://twitter.com/abdullahvcoskun", Icon: FaXTwitter, label: "Twitter" },
];

export default function SocialLinks() {
  return (
    <div className="flex justify-end gap-3 md:gap-4 mt-10 mb-6 md:mb-0 text-secondaryText">
      {links.map(({ href, Icon, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="hover:text-sky-500 transition-colors duration-300 hover:scale-110">
          <Icon className="text-2xl md:text-3xl text-text" />
        </a>
      ))}
    </div>
  );
}
