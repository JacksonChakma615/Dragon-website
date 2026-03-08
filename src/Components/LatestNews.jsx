import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex  gap-4 items-center bg-base-200 p-3">
      <p className="text-base-100 bg-secondary px-3 py-2 font-bold">Latest</p>
      
      {/*  react fast marquee */}
       <Marquee className="flex gap-9 " pauseOnHover={true} speed={68}>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing rum iure fugiat error
        inventore!
      </p>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing rum iure fugiat error
        inventore!
      </p>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing rum iure fugiat error
        inventore!
      </p>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing rum iure fugiat error
        inventore!
      </p>
      
       </Marquee>
    </div>
  );
};

export default LatestNews;
