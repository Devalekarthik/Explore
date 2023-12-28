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
  const [groupImg, setGroupImg] = useState(
    "https://i.ytimg.com/vi/-FBekwrstic/maxresdefault.jpg"
  );
  const [cardIndex, setCardIndex] = useState(null);

  let clientData = Data.clientReview.sort((a, b) => b.stars - a.stars);
  
  let stars = (star) => {
    return (
      <div>
        {[...Array(star)].map(() => (
          <StarRoundedIcon />
        ))}
        {[...Array(5 - star)].map(() => (
          <StarOutlineRoundedIcon />
        ))}
      </div>
    );
  };

  return (
    <>
      <div className="clients">
        <div className="clientsDetails">
          <div className="accordian">
            {clientData.map((item,index) => {
              return (
                <div>
                  <Accordion
                    defaultExpanded={index === 0 ? true : false}
                    onClick={() => setGroupImg(item.groupImg)}
                    onChange={() => setCardIndex(index)}
                    className={cardIndex === index ? "selectedCard" : ""}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <div>
                        <img src={item.profileImg} className="profileImg" />
                      </div>
                      <div className="stars">
                        <h3>{item.Name}</h3>
                        {stars(item.stars)}
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
        </div>
        <div className="clientsImg">
          <img src={groupImg} />
        </div>
      </div>
      {/* <div className="checkwatermark">
        <div className="watermark"></div>
      </div> */}
    </>
  );
};
export default ClientsReview;
