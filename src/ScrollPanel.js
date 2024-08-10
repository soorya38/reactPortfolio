import "./index.css";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

export default function ScrollPanel() {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });

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
        <li className="list-item"></li>
        <li className="list-item"></li>
        <li className="list-item"></li>
        <li className="list-item"></li>
        <li className="list-item"></li>
        <li className="list-item"></li>
        <li className="list-item"></li>
        <li className="list-item"></li>
        <li className="list-item"></li>
        <li className="list-item"></li>
        <li className="list-item"></li>
      </ul>
    </div>
  );
}
