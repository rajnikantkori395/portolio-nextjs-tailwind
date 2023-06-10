import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="py-4 uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600 ">I am not your normal developer</p>
          <p className="py-2 text-gray-600">
            I have spent the last 2 years in the IT service working as a
            front-end developer. I have always had a knack for technology and
            working with computers. In 2019 I started working with HTML & CSS to
            make some edits on a small business website that I was operating.
            What I thought was just a few small edits turned into a love for
            programming.
          </p>
          <p className="py-2 text-gray-600">
            Fascinated with hpe intricate programming can be I as quickly drawn
            to learn more. I started learning javaScript and was even more
            enthused with making websites interactive. I then started
            freelancing for e-commerce companies on the shopify platform. I am
            now spending my time building with React JS, Next JS, Node JS,
            MongoDB, SQL, learning new technologies.
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">Check out some of my latest projects.</p>
        </div>
        <div className="w-full h-auto m-auto shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image className="rounded-xl" src="/assets/about.png" height="400" width="600" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
