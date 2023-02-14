import "../styles/components/socialnetwork.sass";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

const socialNetworks = [
  { name: "linkedin", icon: <FaLinkedinIn /> },
  { name: "github", icon: <FaGithub /> },
  { name: "instagram", icon: <FaInstagram /> },
];

function SocialNetwork() {
  return (
    <section id="social-networks">
      {socialNetworks.map((icon) => (
        <a href="" className="social-btn" id={icon.name} key={icon.icon}>{icon.icon}</a>
      ))}
    </section>
  );
}

export default SocialNetwork;
