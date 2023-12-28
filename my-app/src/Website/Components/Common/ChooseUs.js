import Data from "../../Data/data.json";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import SunSet1 from "../../Images/SunSet1.jpg";
import SunSet2 from "../../Images/SunSet2.jpg";
// import Beach from "../../Images/Beach.jpg";
// import SunSet3 from "../../Images/SunSet3.jpg";

const ChooseUs = () => {
  return (
    <div className="chooseUs" id="Reviews">
      <div className="chooseImgs">
        <img src={SunSet1} className="sunset1Img" />
        <img src={SunSet2} className="sunset2Img" />
      </div>
      <div className="chooseText">
        <div className="chooseTitle">
          <p className="choose-Title">{Data.chooseUs.title}</p>
          <p className="choose-Subtitle">{Data.chooseUs.title_desc}</p>
        </div>
        {Data.chooseUs.safety.map((item) => {
          return (
            <div className="safety">
              <div className="safetyImg">
                {item.safetyImg !== "" ? (
                  <img src={item.safetyImg} />
                ) : (
                  <HealthAndSafetyIcon />
                )}
              </div>
              <div className="safetyText">
                <h3>{item.safetyTextHead}</h3>
                <p>{item.safetyTextdesc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChooseUs;
