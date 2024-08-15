import "./index.css";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

export default function ScrollPanel({ setProjectText }) {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });

  const projectText = [
    { title: "MULTIPLAYER SHOOTER GAME", text: `A fast-paced, competitive multiplayer shooter. Developed a multiplayer system to handle matchmaking, replication, and network optimization. Implemented lag compensation with client-side prediction and server-side rewind. Created various weapons and pickups, and managed multiplayer actions like crouching and reloading. Designed a HUD with health, ammo, score, and timers, and maintained core classes such as Game Mode and Player State. Added features for custom game modes, announcements, and online session management. Tech: Unreal Engine, C++` },
    { title: "NAVIGATION SYSTEM USING AR", text: `A navigation system that provides users with real-time, interactive directions and location-based information through their mobile devices. Displays turn-by-turn navigation instructions overlaid on the real world. Uses AR to highlight routes and key turns with visual indicators. Tech: Unity, C#` },
    { title: "ALGORITHM VISUALIZER", text: `An interactive platform where various algorithms can be observed and understood in action. The tool is designed to bridge the gap between theoretical knowledge and practical understanding by visually demonstrating algorithmic processes. Tech: D3.js` },
    { title: "INVOICE GENERATOR", text: `A system designed to provide robust features for adding, editing, and managing a catalog of products and services. It includes fields for entering detailed item descriptions, unit prices, quantities, and applicable taxes. The system automatically calculates totals, taxes, and discounts to ensure accurate pricing. Additionally, users have the option to export invoices as PDFs for easy sharing and record-keeping. Tech: JavaScript` },
    { title: 'ALTER MOUSE', text: `A JavaScript web application that transforms a smartphone into a wireless touchpad for the computer. Connect a phone and computer over Wi-Fi for seamless control. Adjust sensitivity and gesture controls to suit preferences. Tech: Node.js, Robot.js` },
    { title: 'APARTMENT LOOKUP', text: `A web application that allows users to upload listings for land and homes available for rent or sale. Clients can search properties by location, view details, and make purchases directly through the site. The platform supports secure payment transfers and includes separate control panels for both admin and user management. Tech: PHP, JavaScript, MySQL` },
    { title: 'ATTENDANCE MANAGEMENT SYSTEM USING FACE RECOGNITION', text: `Utilizing face recognition technology for accurate and efficient tracking, ensuring a secure and streamlined attendance process. Tech: OpenCV, TensorFlow` }
  ];

  return (
    <div className="app">
      <svg id="progress" width="100" height="100" viewBox="0 0 100 100" className="progress-svg">
        <circle cx="50" cy="50" r="30" pathLength="1" className="progress-bg" />
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          pathLength="1"
          className="progress-indicator"
          style={{ pathLength: scrollXProgress }}
        />
      </svg>
      <ul ref={ref} className="scrollable-list">
        {projectText.map((item, index) => (
          <li
            className="list-item"
            key={index}
            onClick={() => setProjectText(item.text || item)} 
            style={{ backgroundImage: `url(${require('./gameImage.jpeg')})` }}
          >
          </li>
        ))}
      </ul>
    </div>
  );
}
