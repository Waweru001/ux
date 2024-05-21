import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const MyProjects = () => {
  return (
    <div>
        <div className="flex items-center justify-center">
            <div className="flex flex-col space-y-4">
            <div className="border h-42 w-full rounded-md flex flex-col  p-4 space-x-4">
              {/* <div className="flex"> </div> */}
              <div className="flex space-x-4 items-center">
                {/* <div className="items-center h-16 w-16"></div> */}
                 <a
                    href="https://apprenticecloud.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="name flex items-center text-black hover:text-blue-400 hover:underline"
                  > <img
                  src="https://apprenticecloud.io/wp-content/uploads/2023/06/cropped-AC-CLOUD-TRANSPARENT.png"
                  alt="Apprentice Cloud"
                  className="items-center h-full w-full"
                /> </a>
              </div>
              <div className="techstack">Figma,UX Research, node.js, React,PSQL</div>
            </div>
            <div className="border h-42 w-full rounded-md flex flex-col  p-4 space-x-4">
              {/* <div className="flex"> </div> */}
              <div className="flex space-x-4 items-center">
                {/* <div className="items-center h-16 w-16"></div> */}
                 <a
                    href="https://dev.digifunzi.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="name flex items-center text-black hover:text-blue-400 hover:underline"
                  > <img
                  src="https://dev.digifunzi.com/images/digifunzi-logo.png"
                  alt="Digifunzi"
                  className="items-center h-full w-full"
                /> </a>
              </div>
              <div className="techstack">Figma,UX Research, Prototyping, User Testing, node.js, React,</div>
            </div>
            <div className="border h-42 w-full rounded-md flex flex-col  p-4 space-x-4">
              {/* <div className="flex"> </div> */}
              <div className="flex space-x-4 items-center">
                {/* <div className="items-center h-16 w-16"></div> */}
                 <a
                    href="https://pedal4hope.asilini.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="name flex items-center text-black hover:text-blue-400 hover:underline"
                  > <img
                  src="https://asilini.com/wp-content/uploads/2022/05/Asilini.svg"
                  alt="Digifunzi"
                  className="items-center h-full w-full"
                /> </a>
              </div>
              <div className="techstack">Figma,UX Research, Prototyping, UI Designs</div>
            </div>
            </div>
          </div>
        </div>
  );
};

export default MyProjects;
