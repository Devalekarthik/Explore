import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import Data from "../../Data/data.json";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-companyText">
        <div>
          <div className="footer-title">{Data.header.company}</div>
          <p className="footer-info">Choose your favourite destination.</p>
        </div>
        <div>
          <a href="/">
            <InstagramIcon />
          </a>
          <a href="/">
            <FacebookIcon />
          </a>
        </div>
      </div>
      <div className="footer-details">
        {Data.footer.map((item) => (
          <div className="footer-lists">
            <h4>{item.title}</h4>
            <a href="/">{item.topic1}</a>
            <a href="/">{item.topic2}</a>
            <a href="/">{item.topic3}</a>
            <a href="/">{item.topic4}</a>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Footer;
