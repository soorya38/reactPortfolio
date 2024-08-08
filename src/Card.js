import "./projectList.css";
import { useState } from "react";
import { initialTabs as tabs } from "./ingredients";
import { motion, AnimatePresence } from "framer-motion";

export default function Card() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div className="project-window">
      <nav className="project-nav">
        <ul className="project-ul">
          {tabs.map((item) => (
            <li
              key={item.label}
              className={`project-li ${item === selectedTab ? "selected" : ""}`}
              onClick={() => setSelectedTab(item)}
              style={{color: 'black'}}
            >
              {`${item.icon} ${item.label}`}
              {/* {item === selectedTab ? (
                <motion.div className="project-underline" layoutId="underline" />
              ) : null} */}
            </li>
          ))}
        </ul>
      </nav>
      <main className="project-main">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab ? selectedTab.label : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {selectedTab.text?.map((i) => {
              return <p style={{color: 'black'}}>{i}</p>;
            })}
            {/* {selectedTab ? selectedTab.icon : "😋"} */}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
