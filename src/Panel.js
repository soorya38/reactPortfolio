import "./index.css";
import { useState } from "react";
import { initialTabs as tabs } from "./ingredients";
import { motion, AnimatePresence } from "framer-motion";

export default function Panel() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div className="window">
      <nav className="nav">
        <ul className="nav-list">
          {tabs.map((item) => (
            <li
              key={item.label}
              className={`nav-list-item ${item === selectedTab ? "selected" : ""}`}
              onClick={() => setSelectedTab(item)}
            >
              {`${item.icon} ${item.label}`}
              {item === selectedTab && (
                <motion.div className="underline" layoutId="underline" />
              )}
            </li>
          ))}
        </ul>
      </nav>
      <main className="main-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab ? selectedTab.label : "empty"}
            className="tab-content"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {selectedTab ? selectedTab.icon : "😋"}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
