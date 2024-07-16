import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const PercentageCard = ({ title, percentage }) => {
  return (
    <div className="w-full h-full flex flex-col items-center  bg-transparent p-5 rounded-lg">
      <h3 className="font-poppins text-white font-bold text-[20px] mb-4">{title}</h3>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          textColor: "white",
          pathColor: "#7752FF",
          trailColor: "white",
          textSize: '16px',
          // Centrer le texte
          text: {
            fontSize: '20px',
            fill: 'white',
            dominantBaseline: 'central',
            textAnchor: 'middle',
          },
        })}
        className="w-32 h-32"
      />
    </div>
  );
};

const PercentageCards = () => {
  const data = [
    { title: "Web Development", percentage: 75 },
    { title: "Design", percentage: 65 },
    { title: "Marketing", percentage: 80 },
    { title: "SEO", percentage: 90 },
  ];

  return (
    <div className="w-full h-auto mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {data.map((item, index) => (
        <PercentageCard key={index} title={item.title} percentage={item.percentage} />
      ))}
    </div>
  );
};

export default PercentageCards;
