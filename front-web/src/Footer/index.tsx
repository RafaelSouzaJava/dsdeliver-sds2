import './styles.css';
import { ReactComponent as YoutubeIcon } from './youtube.svg';
import { ReactComponent as LinkedinIcon } from './linkedin.svg';
import { ReactComponent as InstagramIcon } from './instagram.svg';

function Footer() {
    return (
      <footer className="main-footer">
          App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
          <div className="footer-icons">
            <a href="https://www.youtube.com/channel/UC3twHmWQwtqEO7u-gB_2f7g" target="_new">
                <YoutubeIcon />
            </a>
            <a href="https://www.linkedin.com/in/rafael-souza-alves-86b3071b2/" target="_new">
                <LinkedinIcon />
            </a>
            <a href="https://www.instagram.com/rafael.souza.java/" target="_new">
                <InstagramIcon />
            </a>
          </div>
      </footer>
    )
}

export default Footer;