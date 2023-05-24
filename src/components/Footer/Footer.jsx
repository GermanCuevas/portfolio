import "./footer.css";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="list-logos">
        <ul>
          <li>
            <a
              href="https://github.com/GermanCuevas"
              target="_blank"
              rel="noreferrer"
              style={{
                textDecoration: "none",
                cursor: "pointer",
                color: "black",
                marginTop: "auto",
              }}
            >
              <BsGithub size={32} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/german-cuevas-/"
              target="_blank"
              rel="noreferrer"
              style={{
                textDecoration: "none",
                cursor: "pointer",
                color: "black",
                marginTop: "auto",
              }}
            >
              <FaLinkedin size={32} />
            </a>
          </li>
        </ul>
        <hr />
        <div className="container-name">
          <span>© 2023 Germán Cuevas</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
