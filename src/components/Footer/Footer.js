import React from "react";
import "./Footer.css";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterShareButton,
  TwitterIcon,
  RedditShareButton,
  RedditIcon,
  LinkedinIcon,
  LinkedinShareButton,
} from "react-share";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-4 cpo-sm-6">
            {/* <!-- Footer Address --> */}
            <div className="d-flex">
              <p> city Montreal, Main street 20258, office #02</p>
            </div>
            {/* <!-- Footer Phone Number--> */}
            <div className="d-flex">
              <a href="tel:555-555-555">+11(514)555-555</a>
            </div>
            {/* <!-- Footer Email --> */}
            <div className="d-flex">
              <p>techteam2021@gmail.com</p>
            </div>
          </div>
          

          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center iconsPadding">
            <div className="d-flex justify-content-center">
              <FacebookShareButton
                url={"https://www.linkedin.com/in/mohammad-nirou-693737187/"}
                quote={"Developer"}
                hashtag="#javascript"
              >
                <FacebookIcon className="mx-3" size={36} />
              </FacebookShareButton>

              <TwitterShareButton
                url={"https://www.linkedin.com/in/mohammad-nirou-693737187/"}
                quote={"Developer"}
                hashtag="#javascript"
              >
                <TwitterIcon className="mx-3" size={36} />
              </TwitterShareButton>

              <RedditShareButton
                url={"https://www.linkedin.com/in/mohammad-nirou-693737187/"}
                quote={"Developer"}
                hashtag="#javascript"
              >
                <RedditIcon className="mx-3" size={36} />
              </RedditShareButton>

              <LinkedinShareButton
                url={"https://www.linkedin.com/in/mohammad-nirou-693737187/"}
                quote={"Developer"}
                hashtag="#javascript"
              >
                <LinkedinIcon className="mx-3" size={36} />
              </LinkedinShareButton>
            </div>
            <p className="pt-3 text-center">
            Copyright&Copy;
            {new Date().getFullYear()}&nbsp; Mohammad Nirou | All Rights Reserved
             
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
