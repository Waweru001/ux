import React, { useState } from "react";
import { RiCheckboxCircleLine } from "react-icons/ri";
import MyProjects from "./projects";

const AboutMySkills = () => {
  const [billingCycle, setBillingCycle] = useState("Child");
  const [checked, setChecked] = useState(false);

  const calculatePrice = (price) => {
    return billingCycle === "Child" ? price : price * 3;
  };

  const renderPricingCard = (title, price, features, description, index) => {
    return (
      <div
        key={index}
        className={`p-10 max-w-sm md:max-w-1/2 lg:max-w-1/4 shadow-md bg-white text-blue-950 hover:bg-[#36BFFA] hover:text-white transition duration-300 transform ${
          index === 1 ? "md:-translate-y-10   bg-secondary text-white" : ""
        } rounded-2xl`}
      >
        {index === 1 && (
            <></>
        )}
        <div className="text-[27px]  font-bold mb-4 flex items-center">
         {calculatePrice(price)}
          <p className="text-lg ml-2">
            {billingCycle === ""}
          </p>
        </div>
        <h2 className="text-[20px] font-extrabold mb-2 text-blue-950">
          {title}
        </h2>
        <p className="mb-4 text-sm text-[#231D4F]">{description}</p>
        <ul className="mb-10">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex items-center text-[#231D4F] text-sm mb-3"
            >
              <div className="border border-blue-300 bg-neutral-50 rounded-full mr-2">
                <RiCheckboxCircleLine className=" text-[#36BFFA] hover:text-white" />
              </div>
              {feature}
            </li>
          ))}
        </ul>
        
      </div>
    );
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center  ">
        <div className="bg-base-200 rounded-3xl mb-4 ">
          <div className="gap-10  grid md:grid-cols-2 grid-cols-1">
            {renderPricingCard(
              "",
              "Skills",
              [
                <span key={1}>Figma </span>,
                <span key={2}>
                  High fidelity and Prototyping{" "}
                </span>,
                <span key={3}>Lowfidelity and Skteching</span>,
                <span key={4}>UX research</span>,
                <span key={4}>Usability Testing</span>,
                // <span key={5}>Access to coding challenges</span>,
                <span key={6}>Web development</span>,
                <span key={7}>Html 5</span>,
                <span key={8}>CSS</span>,
                <span key={9}>Frontend --- React.js</span>,
                <span key={10}>Backend --- Node.js, express</span>,
                <span key={11}>DBMS --- SQL, PostgresQL, Mongodb</span>,
              ],
            )}
            {renderPricingCard(
              "",
              // "Most Popular",
              "Notable Contributions",
              [
                <span key={1}> <MyProjects /> </span>,
              ],
            )}
            {renderPricingCard(
              "",
              "Contact",
              [
                <span key={1}>Phone Number --- +254794171283</span>,
                <span key={2}>Email --- wawerumwangi867@gmail.com </span>,
              ],
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMySkills;