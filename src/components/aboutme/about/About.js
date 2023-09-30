import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
const About = () => {
  return (
    <div>
      <Container>
        {/* <Slide left > */}
        <Row className="mt-5">
          <Col md={5}>
            {/* <GreetingLottie animationPath="/lottie/coding.json" /> */}

            <Slide left>
              <lottie-player
                src="https://assets5.lottiefiles.com/packages/lf20_iv4dsx3q.json"
                background="transparent"
                speed="1"
                style={{ width: "100%", height: "90%" }}
                loop
                autoplay
              ></lottie-player>
            </Slide>
          </Col>

          <Col md={7}>
            <Fade duration={3000}>
              <p className="home-about-body">
              Experienced and solution-oriented engineer with a strong leadership background,
              specializing in security engineering, management, and systems.
                <br />
                <br />particularly within the realm of
                <i>
                  <b className="purple">
                    {" "}
                    Cloud security and Continuous Integration / Continuous Delivery (CI/CD) environments.{" "}
                  </b>
                </i>
                <br />
                <br />
                Proficient in navigating containerized micro-service architectures &nbsp;
                <i>
                  <b className="purple">Deeply committed to automation and driven by a passion for streamlining processes. </b>
                </i>
                <br />
                <br />
                Known for unwavering persistence, creative approaches to challenges, and an innate drive for &nbsp;
                 <b className="purple">continuous learning.</b> 
                <i>
                  <br/><br/>
                  <b className="purple">
                    {" "}
                    I like to stay updated with evolving threats and technologies that is crucial in the dynamic field of 
                  </b>
                </i>
                &nbsp;  that is crucial in the dynamic field of &nbsp;
                <i>
                  <b className="purple">cybersecurity.</b>
                </i>
                <br />
                <br />I also like to build Scripts and software in &nbsp;
                <i>
                  <b className="purple">Python, Java, Perl, C and C++. </b>
                </i>
              </p>
            </Fade>
          </Col>
        </Row>
        {/* </Slide> */}
      </Container>
    </div>
  );
};

export default About;
