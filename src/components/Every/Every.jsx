import React, { useEffect } from "react";
import { FaPalette, FaRegSquare, FaMobileAlt, FaRocket, FaHeadphones, FaLifeRing, FaSyncAlt, FaFileAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Every.css";

const features = [
  { id: 1, title: "50+ Unique Design Blocks", icon: <FaPalette />, color: "red" },
  { id: 2, title: "Multiple Layouts", icon: <FaRegSquare />, color: "purple" },
  { id: 3, title: "Mobile First Design", icon: <FaMobileAlt />, color: "yellow" },
  { id: 4, title: "Fully Responsive", icon: <FaRocket />, color: "purple" },
  { id: 5, title: "Bootstrap 4 Framework", icon: <FaHeadphones />, color: "red" },
  { id: 6, title: "Humanly Support", icon: <FaLifeRing />, color: "green" },
  { id: 7, title: "Lifetime Updates", icon: <FaSyncAlt />, color: "red" },
  { id: 8, title: "Rich Documentation", icon: <FaFileAlt />, color: "purple" },
];

const rows = [
  features.slice(0, 3),
  features.slice(3, 5),
  features.slice(5, 8)
];

const Every = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="every-container" id="foni">
      <h2 className="every-title">It’s everything you’ll ever need</h2>

      {rows.map((row, index) => (
        <div key={index} className="every-row">
          {row.map((feature) => (
            <div key={feature.id} className={`every-card ${feature.color}-bg`} data-aos="fade-up">
              <span className="every-icon">{feature.icon}</span>
              <span>{feature.title}</span>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
};

export default Every;
