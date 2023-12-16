import { Link } from "react-router-dom";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
    return <>
        <footer className="footer">
            <Link to="https://www.linkedin.com/in/u-mahendra-082114174/">
                <LinkedInIcon/>
            </Link>
            <Link to="https://github.com/Mahenvs">
                <GitHubIcon/>
            </Link>
        </footer>
    </>
}

export default Footer;