import React from "react";
import profile from '../../profile-page.jpg'

const About = () => {
  return (
    <div className="container">
      <div className="py-4">
        <h1><b>Ajith Rajkumar S A</b></h1>
        <h3>Senior Full Stack developer</h3>
        <h5>Cross Hurdle Systems</h5>
        <br />
        <div className="row">
          <div className="col-md-6">       
           <img src={profile} alt="profile" width={"80%"}  className="images" style={{maxHeight:"70%"}}/>
           </div>
           <div className="col-md-6">
        <h6 className="lead"><b>
          Over 2 years of hands-on experience in developing web applications using ReactJS / Redux / Webpack, Jest, Html, CSS, Bootstrap,
          JavaScript, Typescript, PHP, Laravel, AirBNB / Enzyme, Angular with PWA, Rest API, Node JS, MongoDB, MySQL
          Attended 6 months training in Advanced Java, Java Script & PHP Laravel
          Strong work ethics and earned a reputation for meeting deadlines and delivering mission critical solutions.
          A skilled communicator with excellent interpersonal and analytical skills
          Experienced in API development & integration
          Working in AWS, VPS and other server hosting along with nameserver configuration
          Working experience in Gitlab, Github, Bitbucket, PWA
          Strong knowledge in unit testing with ReactJS
          Ability to interpret between Client & Development team in order to produce high accuracy of project
          </b>
        </h6>
        </div>
      </div>
      </div>
    </div>
  );
};

export default About;
