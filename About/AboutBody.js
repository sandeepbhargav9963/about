import React from "react";
import "./About.css";
import chosecart from "../../../Assets/React App_files/usercentric.png";
import chosecart1 from "../../../Assets/React App_files/phone.png";
import chosecart2 from "../../../Assets/React App_files/seo2.png";
import chosecart3 from "../../../Assets/React App_files/hero-img.png";
import chosecart4 from "../../../Assets/React App_files/fast.png";
import chosecart5 from "../../../Assets/React App_files/comm.png";
import Aboutimg from "../../../Assets/React App_files/About-main1.jpg";
import choseimg from "../../../Assets/React App_files/webdesign1.jpg";

const AboutBody = () => {
  return (
    <div>
      <h2 style={{ textAlign: "center", marginBottom: "25px" }}>
        Welcome to EASTECHY IT SOLUTIONS!
      </h2>
      <div>
        <h2
          style={{
            marginLeft: "850px",
            marginTop: "60px",
            position: "relative",
            fontSize: "50px",
            color: "black",
            marginBottom: "-50px",
          }}
        >
          What We Are
        </h2>
        <img className="Aboutimg1" src={Aboutimg} alt="hi"></img>
        <p className="About-main">
          <span style={{ fontSize: "65px", color: "red" }}>W</span>e are
          passionate about creating exceptional web design solutions that make
          businesses stand out in the digital world. With a team of skilled and
          innovative web designers, we take pride in crafting visually stunning,
          user-friendly, and responsive websites that leave a lasting impression
          on your target audience.
        </p>
        <div>
          <h2
            style={{
              marginLeft: "500px",
              color: "black",
              fontSize: "35px",
              fontWeight: "bolder",
              color: "blue",
              marginTop: "-60px",
            }}
          >
            Why Choose Eastechy for<br></br>
            Your Web Design Needs?{" "}
          </h2>
          <p className="chose">
            Tailored Solutions: We understand that each business is unique, and
            that's why we don't believe in a one-size-fits-all approach. Our web
            design process begins with a thorough understanding of your brand,
            goals, and target audience, enabling us to deliver customized
            solutions that perfectly align with your vision.
          </p>

          <img className="choseimg" src={choseimg}></img>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </div>

        <div className="chosecard">
          <img className="chosecardimg" src={chosecart} alt="hi"></img>
          <h4
            style={{
              textAlign: "center",
              color: "blue",
              fontWeight: "bolder",
              fontSize: "28px",
            }}
          >
            User-Centric Designs
          </h4>
          <p className="data">
            {" "}
            Your website is the digital face of your brand. We focus on creating
            designs that not only captivate visitors but also provide a seamless
            and enjoyable user experience. From intuitive navigation to engaging
            interfaces, we ensure your website speaks volumes about your
            commitment to excellence.
          </p>
        </div>
        <div className="chosecard1">
          <img className="chosecardimg1" src={chosecart1} alt="hi"></img>
          <h4
            style={{
              textAlign: "center",
              color: "blue",
              fontWeight: "bolder",
              fontSize: "28px",
            }}
          >
            Mobile Responsiveness
          </h4>
          <p className="data">
            {" "}
            In today's mobile-driven world, having a responsive website is
            essential. Our web designs are optimized to adapt flawlessly to
            various devices, ensuring your customers have a consistent and
            delightful experience, whether they access your site on a desktop,
            tablet, or smartphone.
          </p>
        </div>
        <div className="chosecard2">
          <img className="chosecardimg2" src={chosecart2} alt="hi"></img>
          <h4
            style={{
              textAlign: "center",
              color: "blue",
              fontWeight: "bolder",
              fontSize: "28px",
            }}
          >
            SEO-Friendly Approach
          </h4>
          <p className="data2">
            {" "}
            A visually stunning website is valuable only if it can be found by
            your target audience. Our web design process incorporates SEO best
            practices, making it easier for search engines to index and rank
            your site higher, leading to increased organic traffic and better
            online visibility.
          </p>
        </div>
        <div className="chosecard3">
          <img className="chosecardimg3" src={chosecart3} alt="hi"></img>
          <h4
            style={{
              textAlign: "center",
              color: "blue",
              fontWeight: "bolder",
              fontSize: "28px",
            }}
          >
          Cutting-Edge Technology
          </h4>
          <p className="data3">
          We stay ahead of the curve with the latest web design trends and technologies. By blending creativity with innovation, we deliver modern, future-proof websites that keep your brand relevant in an ever-changing digital landscape
          </p>
        </div>
      </div>
      <div className="chosecard4">
          <img className="chosecardimg4" src={chosecart4} alt="hi"></img>
          <h4
            style={{
              textAlign: "center",
              color: "blue",
              fontWeight: "bolder",
              fontSize: "28px",
            }}
          >
   Timely Delivery:
          </h4>
          <p className="data4">
          We understand the importance of time in business. When you choose Eastechy, you can count on us to deliver your project on time and within budget, without compromising on quality.
          </p>
        </div>
        <div className="chosecard5">
          <img className="chosecardimg5" src={chosecart5} alt="hi"></img>
          <h4
            style={{
              textAlign: "center",
              color: "blue",
              fontWeight: "bolder",
              fontSize: "28px",
            }}
          >
Transparent Communication: 
          </h4>
          <p className="data5">
          Communication is the foundation of any successful project. Throughout the web design process, we keep you informed and involved, valuing your input and feedback to create a website that truly reflects your business values.
          </p>

        </div>
        <div><h1 className="Together">Let's Create a Stunning Online Presence Together</h1></div>
    </div>
  );
};

export default AboutBody;
