import React from "react";
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
            <img src="https://bit.ly/4dRgYuO" />
          </div>
        </div>
        <a className="btn btn-ghost text-xl ">Alex Mwangi</a>
      </div>

      <div className="flex-none gap-2">
        <ContactButton />
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello there</h1>
          <p className="py-6">
            I'M Alex a web developer with an eye for good Design.
          </p>
          <button className="btn btn-primary flex-col ">
            <div>Previous Work </div>
            <MdOutlineKeyboardDoubleArrowDown />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

const AboutMe = () => {
  return (
    <>
      <div className="bg-base-200">
        <AboutMySkills />
      </div>
    </>
  );
};

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
        <a href="https://linkedin.com/in/waweru-mwangi-8994a9231/">
          <FaLinkedin size={24} className="fill-current" />
        </a>
        <Mail />
        {/* Other navigation links */}
      </nav>
    </footer>
  );
};

const App = () => {
  return (
    <div data-theme="light">
      <div>
        <Navbar />
        <Hero />
        <AboutMe />
        <Footer />
      </div>
    </div>
  );
};

export default App;
