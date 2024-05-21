import React from "react";

const ContactButton = () => {
  const handleClick = () => {
    window.location.href = 'mailto:wawerumwangi867@gmail.com';
  };

  return (
    <button className="btn btn-primary" onClick={handleClick}>Say Hello</button>
  );
};

const Navbar = () => {
  return (
    <div className="navbar bg-base-100  ">
      <div className="flex-1 space-x-4">
        <div className="avatar">
          <div className="w-20 rounded-full">
            <img src="https://bit.ly/4dRgYuO" />
          </div>
        </div>
        <a className="btn btn-ghost text-xl ">Alex Mwangi</a>
      </div>

      <div className="flex-none gap-2">
        {/* <button className="btn btn-primary">Say Hello</button> */}
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
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div data-theme="light">
      <div>
        <Navbar />
        <Hero />
      </div>
    </div>
  );
};

export default App;
