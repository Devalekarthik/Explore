const AboutDetails = ({ Data }) => {
  return (
    <div className="about">
      {Data.about.aboutDetails.map((item) => (
        <div>
          <h1>{item.title}</h1>
          <p>{item.details}</p>
        </div>
      ))}
    </div>
  );
};
export default AboutDetails;
