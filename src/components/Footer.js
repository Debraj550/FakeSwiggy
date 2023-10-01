import React from "react";
import { Link } from "react-router-dom";

const Footer = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="bg-indigo-950 mt-7 text-white">
      <div className="w-6/12 m-auto text-center mb-10">
        <h1 className="text-4xl pt-6 pb-1 font-semibold">Fake Swiggy</h1>
        <p className="text-gray-400 text-xl font-bold">
          {" "}
          (Educational Project - React, Redux, Tailwind, React Lottie)
        </p>
      </div>

      <div className="w-9/12 m-auto flex justify-between pb-28">
        <div>
          <h1 className="font-bold text-center text-xl"> Created By</h1>
          <h1>Debraj Dhar</h1>
          <span>
            {" "}
            <i className="fa-solid fa-copyright"> 2023</i>
          </span>
        </div>
        <div>
          <h1 className="font-bold text-xl text-center">Connect with me</h1>
          <a href="https://www.linkedin.com/in/debraj1234/" target="_blank">
            <i class="fa-brands fa-linkedin text-4xl mx-3"></i>
          </a>
          <a href="https://github.com/Debraj550" target="_blank">
            <i class="fa-brands fa-github text-4xl mx-3"></i>
          </a>
          <a href="https://leetcode.com/debrajdhar100/" target="_blank">
            <i class="fa-solid fa-code text-4xl mx-3"></i>
          </a>
        </div>
        <div>
          <div className="flex justify-center">
            <i class="fa-regular fa-envelope text-4xl "></i>
          </div>
          <div className="py-1">
            <a href="mailto:debrajdhar100@email.com">
              <span className="font-semibold"> debrajdhar100@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Footer;
