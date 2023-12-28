import React from "react";
import PhoneAndroidRoundedIcon from "@mui/icons-material/PhoneAndroidRounded";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
// import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Data from "../../Data/data.json";
import LinkedIn from "@mui/icons-material/LinkedIn";

const Portfolio = () => {
  const accordion = (title, details) => {
    return (
      <div className="portfolio-accordion">
        <Accordion
          defaultExpanded={title === "Career Objective" ? true : false}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <div className="accordion-title">{title}</div>
          </AccordionSummary>
          <AccordionDetails>{details}</AccordionDetails>
        </Accordion>
      </div>
    );
  };

  const PortfolioData = Data.Portfolio;

  const Portfolio = [...Array(Object.keys(PortfolioData).length)].map(
    (item, index) => ({
      title: Object.keys(PortfolioData)[index],
      details: Object.values(PortfolioData)[index],
    })
  );

  const PortfolioDetails = (title, details) => {
    const CareerObj = (Careerdetails) => {
      return <div className="career-details">{Careerdetails}</div>;
    };

    const Skills = (SkillDetails) => {
      return (
        <div className="skills-details">
          {[...Array(SkillDetails.length)].map((item, index) => (
            <div>{SkillDetails[index]}</div>
          ))}
        </div>
      );
    };

    const Experience = (experienceDetails) => {
      return (
        <div className="experience-details">
          <h2>
            {experienceDetails.Company} : {experienceDetails.Years}
          </h2>
          {experienceDetails?.Desc?.map((item) => (
            <div>{item}</div>
          ))}
        </div>
      );
    };

    const Education = (educationDetails) => {
      return (
        <div className="education-details">
          {[...Array(Object.keys(educationDetails).length)].map(
            (item, index) => (
              <li>
                {Object.keys(educationDetails)[index]} :{" "}
                {Object.values(educationDetails)[index]}
              </li>
            )
          )}
        </div>
      );
    };

    const Languages = (languageDetails) => {
      return (
        <div className="language-details">
          {[...Array(languageDetails.length)].map((item, index) => (
            <div>{languageDetails[index]}</div>
          ))}
        </div>
      );
    };

    const Projects = (projectDetails) => {
      return (
        <div className="project-details">
          <h3>
            {projectDetails?.Website?.Title}:{" "}
            <a href={projectDetails?.Website?.Link}>
              {projectDetails?.Website?.Name}
            </a>
          </h3>
          <h4>{projectDetails?.["Website-Desc"]?.["Desc-Title"]} :</h4>
          {projectDetails?.["Website-Desc"]?.Desc?.map((item) => (
            <li>{item}</li>
          ))}
        </div>
      );
    };

    const Certification = (certificateDetails) => {
      return (
        <div className="certificate-details">
          {[...Array(certificateDetails.length)].map((item, index) => (
            <li>{certificateDetails[index]}</li>
          ))}
        </div>
      );
    };

    return (
      <>
        {
          {
            "Career Objective": accordion(title, CareerObj(details)),
            Skills: accordion(title, Skills(details)),
            Experience: accordion(title, Experience(details)),
            Projects: accordion(title, Projects(details)),
            Languages: accordion(title, Languages(details)),
            Education: accordion(title, Education(details)),
            Certification: accordion(title, Certification(details)),
          }[title]
        }
      </>
    );
  };

  return (
    <div className="portfolio" id="Creater">
      <div className="portfolio-left">
        <div>
          <img
            src={PortfolioData["Personal-Details"].Img}
            className="portfolio-Img"
          />
        </div>
        <div className="portfolio-details">
          <h2>{PortfolioData["Personal-Details"].Name}</h2>
          <h3>{PortfolioData["Personal-Details"].Role}</h3>
          <h3>{PortfolioData["Personal-Details"].Designation}</h3>
          <p>
            <li>
              <PhoneAndroidRoundedIcon />{" "}
              {PortfolioData["Personal-Details"]["Mobile-No"]}
            </li>
            <li>
              <MailOutlinedIcon /> {PortfolioData["Personal-Details"].Gmail}
            </li>
            <li>
              <a href={PortfolioData["Personal-Details"]["LinkedIn-Link"]}>
                <LinkedInIcon />{" "}
                {PortfolioData["Personal-Details"]["LinkedIn-Name"]}
              </a>
            </li>
            <li>
              <HomeOutlinedIcon /> {PortfolioData["Personal-Details"].Address}
            </li>
          </p>
        </div>
      </div>
      <div className="portfolio-right">
        <div className="career-accordion">
          {Portfolio.map((item) =>
            item.title === "Career Objective"
              ? PortfolioDetails(item.title, item.details)
              : ""
          )}
        </div>
        <div className="career-details-accordion">
          {Portfolio.map((item) =>
            item.title !== "Career Objective"
              ? PortfolioDetails(item.title, item.details)
              : ""
          )}
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
