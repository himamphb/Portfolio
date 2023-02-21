import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-full bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-5">
          I have started my journey in Frontend Developer adept in expertise in
          all stages of Frontend web development. Equipped with a diverse and
          promising skillset. Able to effectively self-manage during independent
          projects, as well as collaborate as a part of Productive team.
          Currently, I love to work on web application using technologies like
          React, javascript and Redux.
        </p>
      </div>
    </div>
  );
};

export default About;
