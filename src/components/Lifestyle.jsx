import React, { useState } from "react";

import { photos, filters } from "../life";
import Div from "./Div";

const lifestyle = () => {
  const [selectedTag, setSelectedTag] = useState("all");
  const [photopsData, setProjectData] = useState(photos);

  const filterHandler = (tag) => {
    setSelectedTag(tag);
    let filteredProjects = [];
    if (tag === "all") {
      filteredProjects = photos;
    } else {
      filteredProjects = photos.filter((p) => p.tags.includes(tag));
    }
    setProjectData(filteredProjects);
  };

  return (
    <>
      <div id="life" className="mt-10 relative">
        {/* SECTION HEADING START */}
        <Div className="mb-10">
          <div className="flex text-center justify-center gap-2 md:gap-0 md:flex-col text-[40px] md:text-[90px] 2xl:text-[120px] leading-[40px] md:leading-[95px] 2xl:leading-[123px] font-oswald uppercase text-gradient mb-2">
            Life Style
          </div>
          <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-[#CCCCCC] text-center">
            MY DIGITAL SCRAPBOOK
          </div>
        </Div>
        {/* SECTION HEADING END */}

        {/* FILTER TAGS START */}
        <Div className="flex justify-start md:justify-center gap-[10px] mb-[50px] overflow-auto">
          {filters.map((item, index) => (
            <div
              key={index}
              className={`bg-[#252525] rounded-lg py-[10px] px-[17px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] cursor-pointer whitespace-nowrap ${
                selectedTag === item.id ? "bg-[#EFB946] text-black" : ""
              }`}
              onClick={() => filterHandler(item.id)}
            >
              {item.name}
            </div>
          ))}
        </Div>
        {/* FILTER TAGS START */}

        {/* PROJECTS GRID START */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 imargin">
          {photopsData.map((item, index) => {
            return (
              <Div key={index} className="flex flex-col gap-4 cursor-pointer  ">
                <div className="bg-black rounded-[20px] aspect-video overflow-hidden iheight">
                  <img
                    src={item.image}
                    className="transition-transform hover:-translate-y-[10%] hover:duration-2500 ease-linear"
                  />
                  
                </div>
                <dev className="caption flex flex-col">
                
                </dev>
                <div className="text-[20px] 2xl:text-[24px] text-[#CCCCCC] text-center">
                  <a href={item.href}>{item.name}</a>
                </div>
                <div className="text-[20px] 2xl:text-[24px] text-[#CCCCCC] text-center">
                  
                </div>
              </Div>
            );
          })}
        </div>
        {/* PROJECTS GRID START */}
      </div>
      <div id="life" className="mt-20 relative"></div>
    </>
  );
};

export default lifestyle;  

