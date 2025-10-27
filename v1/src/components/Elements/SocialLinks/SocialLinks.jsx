import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import "./SocialLinks.css";
const SocialLinks = () => {
  return (
    <div>
      <div className="social-links-container">
        <a
          href="https://github.com/AbdullahVC"
          target="_blank"
          rel="noreferrer noopener">
          <GitHubIcon style={{ fontSize: "2.5rem" }} />
        </a>
        <a
          href="mailto:info@abdullahvcoskun.dev"
          target="_blank"
          rel="noreferrer noopener">
          <EmailIcon style={{ fontSize: "2.5rem" }} />
        </a>
        <a
          href="https://wa.me/905373545793"
          target="_blank"
          rel="noreferrer noopener">
          <WhatsAppIcon style={{ fontSize: "2.5rem" }} />
        </a>
        <a
          href="https://www.linkedin.com/in/abdullahvcoskun/"
          target="_blank"
          rel="noreferrer noopener">
          <LinkedInIcon style={{ fontSize: "2.5rem" }} />
        </a>
        <a
          href="https://www.instagram.com/abdullahvcoskun/"
          target="_blank"
          rel="noreferrer noopener">
          <InstagramIcon style={{ fontSize: "2.5rem" }} />
        </a>
        <a
          href="https://twitter.com/abdullahvcoskun"
          target="_blank"
          rel="noreferrer noopener">
          <XIcon style={{ fontSize: "2.5rem" }} />
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
