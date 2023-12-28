import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import Data from "../../Data/data.json";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>{Data.header.company}</h1>
          <p>Choose your favourite destination.</p>
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
      <div className="bottom">
        {Data.footer.map((item) => (
          <div>
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
