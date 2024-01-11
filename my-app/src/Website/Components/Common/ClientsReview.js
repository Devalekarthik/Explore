import StarRoundedIcon from "@mui/icons-material/StarRounded";
// import StarHalfRoundedIcon from "@mui/icons-material/StarHalfRounded";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";
// import myProfile from "../../Images/myprofile.jpg";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import makeStyles from "@mui/styles/makeStyles";
import Data from "../../Data/data.json";
import { useState } from "react";

const ClientsReview = () => {
  let clientData = Data.clientReview.sort((a, b) => b.stars - a.stars);

  let stars = (star) => {
    return (
      <span className="review-stars">
        {[...Array(star)].map(() => (
          <StarRoundedIcon />
        ))}
        {[...Array(5 - star)].map(() => (
          <StarOutlineRoundedIcon />
        ))}
      </span>
    );
  };

  const [selectedAccordion, setSelectedAccordion] = useState(0);
  const [groupImg, setGroupImg] = useState(clientData[0].groupImg);

  const [clientViewMore, setClientViewMore] = useState(false);

  const handleChange = (accordionIndex) => {
    setSelectedAccordion(
      accordionIndex === selectedAccordion ? null : accordionIndex
    );
    setGroupImg(clientData[accordionIndex].groupImg);
  };

  return (
    <>
      <div className="clients">
        <div className="clientsDetails">
          <div
            className={`clients-accordian ${
              clientViewMore && "clients-viewMore"
            }`}
          >
            {clientData.map((item, index) => {
              return (
                <div>
                  <Accordion
                    expanded={selectedAccordion === index}
                    defaultExpanded={selectedAccordion === 0 ? true : false}
                    onChange={() => handleChange(index)}
                    className={
                      selectedAccordion === index ? "selectedCard" : ""
                    }
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <div className="review-title">
                        <div>
                          <img src={item.profileImg} className="profileImg" />
                        </div>
                        <div className="review-name">
                          <span>
                            {item.Name} {stars(item.stars)}
                          </span>
                          <div className="review-email">
                            karthikdevale@gmail.com
                          </div>
                        </div>
                      </div>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>{item.Review}</Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              );
            })}
          </div>
          <button
            className="clients-viewMoreBtn"
            onClick={() => setClientViewMore(!clientViewMore)}
          >
            {clientViewMore ? "View Less" : "View More"}
          </button>
        </div>
        <div className="clientsImg">
          <img
            src={groupImg}
            className={`client-pic ${clientViewMore && "clients-viewMorePic"} `}
          />
          <img
            src="./ClientReview.PNG"
            className={`client-bgPic ${
              clientViewMore && "clients-viewMoreBgPic"
            }`}
          />
        </div>
      </div>
      {/* <div className="checkwatermark">
        <div className="watermark"></div>
      </div> */}
    </>
  );
};
export default ClientsReview;
