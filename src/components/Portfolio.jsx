import React from "react";
import WeatherApp from "../assets/weatherApp.png";

function Portfolio() {
  const portfolios = [
    {
      id: 1,
      src: WeatherApp,
      href: "https://rainbow-zabaione-d6bf7c.netlify.app/"
    },
    
  ];

   const handleDemoProject = (id) => {
    const data = portfolios.find((portfolio)=>{
        return portfolio.id === id;
        
    });
    console.log(data)
    window.open(data.href);
   } 


  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gra-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div  className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
        {portfolios.map(({id,src}) => (
            <div key={id}>
            <div className="shadow-md shadow-gray-600 rounded-lg ">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center ">
                <button onClick={()=>handleDemoProject(id)} className="w-1/2 px-6 -py-3 m-4 duration-200 hover:scale-110">
                  Demo
                </button>
                {/* <button className="w-1/2 px-6 -py-3 m-4 duration-200 hover:scale-110">
                  Code
                </button> */}
              </div>  
            </div>
            <div className="flex items-center justify-center mt-4 ">
                    <h2 className="text-2xl">Weather App </h2>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
