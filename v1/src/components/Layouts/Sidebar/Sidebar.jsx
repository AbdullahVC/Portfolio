import "./Sidebar.css";
import { SocialLinks } from "../../index";
import { useState, useEffect } from "react";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState("#about");

  useEffect(() => {
    const sections = document.querySelectorAll(".main-section");

    // IntersectionObserver ayarları
    const options = {
      threshold: 0.4, // Section'ın %40'ı görünür olduğunda tetikle
      rootMargin: "-20% 0px -35% 0px", // Viewport'un orta kısmında tetikle
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(`#${entry.target.id}`);
        }
      });
    }, options);

    // Her section'ı gözlemle
    sections.forEach((section) => observer.observe(section));

    // Cleanup
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    const container = document.querySelector(".main-container");
    const headerOffset = 0;
    const elementPosition = section.offsetTop;
    const offsetPosition = elementPosition - headerOffset;

    container.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  const handleClick = (e, link) => {
    e.preventDefault();
    setActiveLink(link);
    // Smooth scroll
    scrollToSection(link);
  };

  const navLinks = [
    { href: "#about", text: "Hakkımda" },
    { href: "#skills", text: "Yetenekler" },
    { href: "#experiences", text: "Deneyimler" },
    { href: "#projects", text: "Projeler" },
  ];

  return (
    <div className="sidebar-container">
      <div className="sidebar-main">
        <h1 className="sidebar-h1">Abdullah V. Çoşkun</h1>
        <h2 className="sidebar-h2 chakra-petch-regular">
          Full Stack Web Developer <br /> ASP.NET & React
        </h2>
      </div>

      <nav className="sidebar-nav">
        {navLinks.map(({ href, text }) => (
          <a
            key={href}
            href={href}
            onClick={(e) => handleClick(e, href)}
            className={activeLink === href ? "active" : ""}>
            {text}
          </a>
        ))}
      </nav>

      <SocialLinks />
    </div>
  );
};

export default Sidebar;
