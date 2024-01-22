import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import SunSet1 from "../../Images/SunSet1.jpg";
import SunSet2 from "../../Images/SunSet2.jpg";

const ChooseUs = (props) => {
  const { Data } = props;

  return (
    <div className="chooseUs" id="Reviews">
      <div className="chooseUs-imgs">
        <img src={SunSet1} className="chooseUs-bgimg" />
        <img src={SunSet2} className="chooseUs-smimg" />
      </div>
      <div className="chooseUs-block">
        <div className="chooseUs-texts">
          <p className="chooseUs-title">{Data.ChooseUs.title}</p>
          <p className="chooseUs-subTitle">{Data.ChooseUs.subTitle}</p>
        </div>
        {Data.ChooseUs.safety.map((item) => {
          return (
            <div className="chooseUs-safety">
              <div className="chooseUs-safetyImages">
                {item.safetyImg !== "" ? (
                  <img src={item.safetyImg} className="chooseUs-safetyImg" />
                ) : (
                  <HealthAndSafetyIcon />
                )}
              </div>
              <div className="chooseUs-safetyText">
                <div className="chooseUs-safetyTitle">{item.safetyTitle}</div>
                <p className="chooseUs-safetyInfo">{item.safetyTitleInfo}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChooseUs;
