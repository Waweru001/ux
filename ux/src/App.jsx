import React, { useRef, forwardRef } from "react";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { AboutMySkills } from "./components";
import { FaLinkedin, FaEnvelope } from "react-icons/fa"; // Import icons from react-icons library

const ContactButton = () => {
  const handleClick = () => {
    window.location.href = "mailto:wawerumwangi867@gmail.com";
  };

  return (
    <button className="btn btn-primary" onClick={handleClick}>
      Say Hello
    </button>
  );
};
const Mail = () => {
  const handleClick = () => {
    window.location.href = "mailto:wawerumwangi867@gmail.com";
  };

  return (
    <button onClick={handleClick}>
      <FaEnvelope size={24} className="fill-current" />
    </button>
  );
};
const Navbar = () => {
  return (
    <div className="navbar bg-base-100 fixed top-0 left-0 w-full d z-10 ">
      <div className="flex-1 space-x-4">
        <div className="avatar">
          <div className="w-20 rounded-full">
            <img src="/alex.jpeg" />
          </div>
        </div>
        <div className="flex flex-col">
          <a className="btn btn-ghost text-xl ">Alex Mwangi</a>
          <div className="flex justify-center items-center space-x-4">
            <a
              href="https://linkedin.com/in/waweru-mwangi-8994a9231/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} className="fill-current" />
            </a>
            <Mail />
          </div>
        </div>
      </div>

      <div className="flex-none gap-2">
        <ContactButton />
      </div>
    </div>
  );
};

const Hero = ({ scrollToAboutMe }) => {
  return (
    <div className="hero min-h-screen bg-base-200">
      {/* <img src="./hero.svg" alt="" className="absolute bottom-0 left-0 w-32 h-32 object-cover" /> */}
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello there</h1>
          <p className="py-6">
            I'M Alex a web developer with an eye for good Design.
          </p>
          <button
            className="btn btn-primary flex-col "
            onClick={scrollToAboutMe}
          >
            <div>Previous Work </div>
            <MdOutlineKeyboardDoubleArrowDown />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};
const AboutMe = forwardRef((props, ref) => {
  return (
    <section ref={ref} id="about-me">
      <div className="bg-base-200">
        <AboutMySkills />
      </div>
    </section>
  );
});

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer items-center p-4 bg-neutral text-neutral-content">
      <aside className="items-center grid-flow-col">
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
          className="fill-current"
        >
          <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
        </svg>
        <p>Alex © {currentYear} - All rights reserved</p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a
          href="https://linkedin.com/in/waweru-mwangi-8994a9231/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={24} className="fill-current" />
        </a>
        <Mail />
        {/* Other navigation links */}
      </nav>
    </footer>
  );
};

const FaqSection = () => {
  return (
    <div className="flex flex-col  md:space-x-8 space-y-4 justify-center items-center mb-6 mt-6">
      <h3 className="text-center text-5xl font-bold">Experience</h3>
      <div className="join join-vertical w-full md:w-[800px]">
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            1. UI / UX Dsigner @ Digifunzi
          </div>
          <div className="collapse-content">
            <p>Role</p>
            <p>
              <ul style={{ listStyleType: "disc", marginLeft: "1.5em" }}>
                <li>
                  Conducted user interviews, surveys, and usability testing to
                  gather insights.
                </li>
                <li>
                  Developed sitemaps, user flows, and wireframes to structure
                  content.
                </li>
                <li>
                  Organized and labeled content to improve navigation and
                  findability in the LMS used by 500 + students.
                </li>
                <li>
                  Created interactive prototypes to demonstrate user flows and
                  interactions.
                </li>
                <li>
                  Designed intuitive user interfaces with a focus on usability
                  and efficiency.
                </li>
                <li>
                  Planned and conducted usability tests to identify user pain
                  points.
                </li>
                <li>
                  Analyzed test results and provided actionable recommendations
                  for improvement.
                </li>
                <li>
                  Designed visually appealing interfaces that align with brand
                  guidelines.
                </li>
                <li>
                  Built high-fidelity prototypes to validate design concepts and
                  interactions.
                </li>
                <li>
                  Used tools like Figma, Sketch, InVision, and Adobe XD for
                  prototyping.
                </li>
                <li>
                  Mapped out end-to-end user journeys across multiple
                  touchpoints.
                </li>
              </ul>
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            2. UX lead Google Developers Student's Clubs
          </div>
          <div className="collapse-content">
            <p>Role</p>
            <p>
              <ul style={{ listStyleType: "disc", marginLeft: "1.5em" }}>
                <li>Managed UX projects from inception to completion.</li>
                <li>
                  Developed sitemaps, user flows, and wireframes to structure
                  content.
                </li>
                <li>
                  Coordinated between design, development, and stakeholder teams
                  to ensure timely delivery.
                </li>
                <li>
                  Aligned UX strategies with broader customer experience goals.
                </li>
                <li>
                  Technical mentor for students with interest in UX design
                  mentoring 100 + students during my time as the UX lead
                </li>
                <li>
                  Collaborated with development teams to implement designs.
                </li>
                <li>
                  Lead a team of 6 Designers and Developers for a project that
                  participated in the Global Google developer challenge.
                </li>
                <li>
                  Mapped out end-to-end user journeys across multiple
                  touchpoints.
                </li>
                <li>
                  Addressed complex design challenges with creative and
                  user-centered solutions.
                </li>
                <li>
                  Presented design concepts and research findings to
                  stakeholders.
                </li>
                <li>
                  Communicated user needs and design rationale clearly and
                  persuasively.
                </li>
              </ul>
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            3. Web Developer @ Apprentice Cloud LTD
          </div>
          <div className="collapse-content">
            <p>
              <ul style={{ listStyleType: "disc", marginLeft: "1.5em" }}>
                <li>
                  Conducted user interviews, surveys, and usability testing to
                  gather insights.
                </li>
                <li>
                  Developed sitemaps, user flows, and wireframes to structure
                  content.
                </li>
                <li>
                  Created interactive prototypes to demonstrate user flows and
                  interactions.
                </li>
                <li>
                  Designed intuitive user interfaces with a focus on usability
                  and efficiency.
                </li>

                <li>
                  Analyzed test results and provided actionable recommendations
                  for improvement.
                </li>
                <li>
                  Designed visually appealing interfaces that align with brand
                  guidelines.
                </li>
                <li>
                  Built high-fidelity prototypes to validate design concepts and
                  interactions.
                </li>
                <li>
                  Used tools like Figma, Sketch, InVision, and Adobe XD for
                  prototyping.
                </li>
                <li>
                  Used React.js to developed translations for the designs to
                  working protoypes and products to deploy for use.
                </li>
                <li>
                  Backend Development using Node.js, Express and PsSQL for
                  adding logic and funtionality of the appications
                </li>
              </ul>
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            4. Co Founder @ WebZoom Solutions
          </div>
          <div className="collapse-content">
            <p>
              Co founded Webzoom Solutions a Web design agency with my long time
              friend Andrew where we offer tailored Developmentsolutions for
              businesses . <br /> These are services we offer:
            </p>
            <p>
              <ul style={{ listStyleType: "decimal", marginLeft: "1.5em" }}>
                <li>Design and ideation</li>
                <li>Website and Mobile design and development</li>
                <li>ERP Solutions</li>
                <li>Custom software development.</li>
                <li>Machine learning & AI</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const aboutMeRef = useRef(null);

  const scrollToAboutMe = () => {
    if (aboutMeRef.current) {
      aboutMeRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div data-theme="light">
      <div>
        <Navbar />
        <Hero scrollToAboutMe={scrollToAboutMe} />
        {/* <section ref={aboutMeRef} id="about-me"></section> */}
        <AboutMe ref={aboutMeRef} />
        <FaqSection />
        <Footer />
      </div>
    </div>
  );
};



export default App;
